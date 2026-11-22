const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { getDb } = require('../db/connection');
const { requireAuth } = require('../auth');

const router = express.Router();
router.use(requireAuth);

router.get('/', (req, res) => {
    const db = getDb();
    const items = db
        .prepare(
            `SELECT cart_items.id, cart_items.productId, cart_items.qty, products.name, products.newPrice, products.imagePath
             FROM cart_items JOIN products ON products.id = cart_items.productId
             WHERE cart_items.userId = ?`
        )
        .all(req.user.id);
    res.json(items);
});

router.post('/', (req, res) => {
    const { productId, qty } = req.body || {};
    const db = getDb();
    const product = db.prepare('SELECT id FROM products WHERE id = ?').get(productId);
    if (!product) return res.status(404).json({ error: `Product ${productId} not found.` });
    if (!Number.isInteger(qty) || qty < 1) return res.status(400).json({ error: 'qty must be a positive integer.' });

    const existing = db.prepare('SELECT * FROM cart_items WHERE userId = ? AND productId = ?').get(req.user.id, productId);
    if (existing) {
        db.prepare('UPDATE cart_items SET qty = qty + ? WHERE id = ?').run(qty, existing.id);
    } else {
        db.prepare('INSERT INTO cart_items (id, userId, productId, qty) VALUES (?, ?, ?, ?)').run(uuidv4(), req.user.id, productId, qty);
    }
    res.status(201).json({ ok: true });
});

router.delete('/:productId', (req, res) => {
    const result = getDb().prepare('DELETE FROM cart_items WHERE userId = ? AND productId = ?').run(req.user.id, req.params.productId);
    if (result.changes === 0) return res.status(404).json({ error: 'Not in cart.' });
    res.status(204).end();
});

module.exports = router;
