const request = require('supertest');
const app = require('./index');

describe('GET /api/products', () => {
    it('responds with json containing a list of products', async () => {
        const response = await request(app).get('/api/products');
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});