const request = require('supertest');
const app = require('./app');

test('Server should respond with 200', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
});
