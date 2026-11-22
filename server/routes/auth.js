const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { getDb } = require('../db/connection');
const { createPasswordHash, verifyPassword, createSession } = require('../auth');

const router = express.Router();
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/register', (req, res) => {
    const { email, password } = req.body || {};
    if (!email || !EMAIL_PATTERN.test(email)) return res.status(400).json({ error: 'A valid email is required.' });
    if (!password || password.length < 6) return res.status(400).json({ error: 'Password must be at least 6 characters.' });

    const db = getDb();
    const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
    if (existing) return res.status(409).json({ error: 'An account with this email already exists.' });

    const { salt, passwordHash } = createPasswordHash(password);
    const id = uuidv4();
    db.prepare('INSERT INTO users (id, email, passwordHash, salt, role, createdAt) VALUES (?, ?, ?, ?, ?, ?)').run(
        id,
        email,
        passwordHash,
        salt,
        'customer',
        new Date().toISOString()
    );
    res.status(201).json({ id, email, role: 'customer' });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body || {};
    if (!email || !password) return res.status(400).json({ error: 'Email and password are required.' });

    const db = getDb();
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (!user || !verifyPassword(password, user.salt, user.passwordHash)) {
        return res.status(401).json({ error: 'Invalid email or password.' });
    }
    const { token, expiresAt } = createSession(user.id);
    res.json({ token, expiresAt, user: { id: user.id, email: user.email, role: user.role } });
});

module.exports = router;
