const { test, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const { resetDb } = require('../db/connection');

const { createApp } = require('../index');
const app = createApp();

beforeEach(() => {
    resetDb();
});

test('register then login works', async () => {
    const reg = await request(app).post('/api/auth/register').send({ email: 'a@example.com', password: 'secret123' });
    assert.equal(reg.status, 201);
    assert.equal(reg.body.role, 'customer');

    const login = await request(app).post('/api/auth/login').send({ email: 'a@example.com', password: 'secret123' });
    assert.equal(login.status, 200);
    assert.ok(login.body.token);
});

test('register rejects a duplicate email', async () => {
    await request(app).post('/api/auth/register').send({ email: 'a@example.com', password: 'secret123' });
    const res = await request(app).post('/api/auth/register').send({ email: 'a@example.com', password: 'secret123' });
    assert.equal(res.status, 409);
});

test('register rejects an invalid email', async () => {
    const res = await request(app).post('/api/auth/register').send({ email: 'not-an-email', password: 'secret123' });
    assert.equal(res.status, 400);
});

test('register rejects a short password', async () => {
    const res = await request(app).post('/api/auth/register').send({ email: 'b@example.com', password: '123' });
    assert.equal(res.status, 400);
});

test('login rejects a wrong password', async () => {
    await request(app).post('/api/auth/register').send({ email: 'a@example.com', password: 'secret123' });
    const res = await request(app).post('/api/auth/login').send({ email: 'a@example.com', password: 'wrong' });
    assert.equal(res.status, 401);
});

test('login rejects an unknown email', async () => {
    const res = await request(app).post('/api/auth/login').send({ email: 'nobody@example.com', password: 'secret123' });
    assert.equal(res.status, 401);
});
