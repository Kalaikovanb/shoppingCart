const { test, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const { resetDb } = require('../db/connection');

const { createApp } = require('../index');
const app = createApp();

beforeEach(() => {
    resetDb();
});

test('GET /api/products returns all 36 seeded products', async () => {
    const res = await request(app).get('/api/products');
    assert.equal(res.status, 200);
    assert.equal(res.body.length, 36);
});

test('GET /api/products/:id returns one product', async () => {
    const res = await request(app).get('/api/products/1');
    assert.equal(res.status, 200);
    assert.equal(res.body.id, 1);
});

test('GET /api/products/:id on an unknown id gives 404', async () => {
    const res = await request(app).get('/api/products/9999');
    assert.equal(res.status, 404);
});
