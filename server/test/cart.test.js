const { test, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const { resetDb } = require('../db/connection');

const { createApp } = require('../index');
const app = createApp();

let token;

beforeEach(async () => {
    resetDb();
    await request(app).post('/api/auth/register').send({ email: 'a@example.com', password: 'secret123' });
    const login = await request(app).post('/api/auth/login').send({ email: 'a@example.com', password: 'secret123' });
    token = login.body.token;
});

test('cart requires authentication', async () => {
    const res = await request(app).get('/api/cart');
    assert.equal(res.status, 401);
});

test('adding then reading the cart works', async () => {
    const add = await request(app).post('/api/cart').set('Authorization', `Bearer ${token}`).send({ productId: 1, qty: 2 });
    assert.equal(add.status, 201);

    const get = await request(app).get('/api/cart').set('Authorization', `Bearer ${token}`);
    assert.equal(get.status, 200);
    assert.equal(get.body.length, 1);
    assert.equal(get.body[0].qty, 2);
});

test('adding the same product twice increments its quantity', async () => {
    await request(app).post('/api/cart').set('Authorization', `Bearer ${token}`).send({ productId: 1, qty: 2 });
    await request(app).post('/api/cart').set('Authorization', `Bearer ${token}`).send({ productId: 1, qty: 3 });

    const get = await request(app).get('/api/cart').set('Authorization', `Bearer ${token}`);
    assert.equal(get.body.length, 1);
    assert.equal(get.body[0].qty, 5);
});

test('adding an unknown product is rejected', async () => {
    const res = await request(app).post('/api/cart').set('Authorization', `Bearer ${token}`).send({ productId: 9999, qty: 1 });
    assert.equal(res.status, 404);
});

test('removing a cart item works', async () => {
    await request(app).post('/api/cart').set('Authorization', `Bearer ${token}`).send({ productId: 1, qty: 1 });
    const del = await request(app).delete('/api/cart/1').set('Authorization', `Bearer ${token}`);
    assert.equal(del.status, 204);

    const get = await request(app).get('/api/cart').set('Authorization', `Bearer ${token}`);
    assert.equal(get.body.length, 0);
});
