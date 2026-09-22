const request = require('supertest');
const app = require('../server');

describe('API tests', () => {
  it('starts a run', async () => {
    const res = await request(app).post('/api/start');
    expect(res.statusCode).toBe(200);
    expect(res.body.runId).toBeDefined();
  });

  it('fetches events after run', async () => {
    const start = await request(app).post('/api/start');
    const res = await request(app).get(`/api/events?runId=${start.body.runId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.events.length).toBe(30);
  });

  it('fails if no run started', async () => {
    const res = await request(app).get('/api/events');
    expect(res.statusCode).toBe(400);
  });
});
