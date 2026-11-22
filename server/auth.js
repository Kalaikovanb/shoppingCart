const crypto = require('crypto');
const { getDb } = require('./db/connection');

const SESSION_TTL_MS = 1000 * 60 * 60 * 24; // 24 hours

function hashPassword(password, salt) {
    return crypto.scryptSync(password, salt, 64).toString('hex');
}

function createPasswordHash(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    return { salt, passwordHash: hashPassword(password, salt) };
}

function verifyPassword(password, salt, passwordHash) {
    const candidate = Buffer.from(hashPassword(password, salt), 'hex');
    const expected = Buffer.from(passwordHash, 'hex');
    return candidate.length === expected.length && crypto.timingSafeEqual(candidate, expected);
}

function createSession(userId) {
    const db = getDb();
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + SESSION_TTL_MS).toISOString();
    db.prepare('INSERT INTO sessions (token, userId, expiresAt) VALUES (?, ?, ?)').run(token, userId, expiresAt);
    return { token, expiresAt };
}

function findUserBySession(token) {
    const db = getDb();
    const session = db.prepare('SELECT * FROM sessions WHERE token = ?').get(token);
    if (!session) return null;
    if (new Date(session.expiresAt).getTime() < Date.now()) return null;
    return db.prepare('SELECT id, email, role FROM users WHERE id = ?').get(session.userId);
}

/** Express middleware: requires a valid `Authorization: Bearer <token>` header. */
function requireAuth(req, res, next) {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice('Bearer '.length) : null;
    const user = token ? findUserBySession(token) : null;
    if (!user) return res.status(401).json({ error: 'Not authenticated.' });
    req.user = user;
    next();
}

module.exports = { createPasswordHash, verifyPassword, createSession, findUserBySession, requireAuth };
