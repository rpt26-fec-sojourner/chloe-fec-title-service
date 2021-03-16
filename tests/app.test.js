import request from 'supertest';
import app from '../server/index';

describe('GET /title/:listing_id', () => {
  it('should return 200 response code when data exists for given ID', async () => {
    const res = await request(app).get('/title/33');
    expect(res.status).toBe(200);
  });

  it('should return with same listing ID as the one requested', async () => {
    const res = await request.get('/title/5');
    expect(res.body.listingID).toBe(5);
  })
});