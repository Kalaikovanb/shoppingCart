// Single place that owns the database connection. In-memory SQLite via Node's
// built-in node:sqlite (no native dependency), same reasoning as other services
// built this session: no Docker, no internet to fetch a native driver.
const { DatabaseSync } = require('node:sqlite');

const SCHEMA = `
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        imagePath TEXT NOT NULL,
        newPrice REAL NOT NULL,
        oldPrice REAL NOT NULL,
        stock INTEGER NOT NULL DEFAULT 20
    );

    CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        passwordHash TEXT NOT NULL,
        salt TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'customer',
        createdAt TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS sessions (
        token TEXT PRIMARY KEY,
        userId TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        expiresAt TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS cart_items (
        id TEXT PRIMARY KEY,
        userId TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        productId INTEGER NOT NULL REFERENCES products(id),
        qty INTEGER NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_cart_items_userId ON cart_items(userId);
`;

const CATEGORIES = ['women', 'men', 'kid'];
const NAMES = {
    women: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
    men: 'Classic Fit Cotton Crew Neck T-Shirt',
    kid: 'Printed Cotton Short Sleeve Playwear Set'
};

function seedProducts(database) {
    const insert = database.prepare(
        'INSERT INTO products (id, name, category, imagePath, newPrice, oldPrice, stock) VALUES (?, ?, ?, ?, ?, ?, ?)'
    );
    let id = 1;
    for (const category of CATEGORIES) {
        for (let i = 1; i <= 12; i++) {
            const newPrice = 40 + ((id * 7) % 60);
            const oldPrice = newPrice + 20 + ((id * 3) % 30);
            insert.run(id, NAMES[category], category, `product_${id}.png`, newPrice, oldPrice, 20);
            id += 1;
        }
    }
}

let db = null;

/** The one shared database connection, created on first use. */
function getDb() {
    if (!db) {
        db = new DatabaseSync(':memory:');
        db.exec('PRAGMA foreign_keys = ON;');
        db.exec(SCHEMA);
        seedProducts(db);
    }
    return db;
}

/** Drop and recreate all tables. Used by tests to start from a clean, seeded database. */
function resetDb() {
    if (db) db.close();
    db = new DatabaseSync(':memory:');
    db.exec('PRAGMA foreign_keys = ON;');
    db.exec(SCHEMA);
    seedProducts(db);
    return db;
}

module.exports = { getDb, resetDb };
