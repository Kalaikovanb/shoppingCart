const express = require('express');
const { getDb } = require('../db/connection');

const router = express.Router();

router.get('/', (req, res) => {
    const products = getDb().prepare('SELECT * FROM products ORDER BY id').all();
    res.json(products);
});

router.get('/:id', (req, res) => {
    const product = getDb().prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
    if (!product) return res.status(404).json({ error: `Product ${req.params.id} not found.` });
    res.json(product);
});

module.exports = router;
