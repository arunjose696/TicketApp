import { app } from '../../app';
import request from 'supertest';
it('checks if signout sets a cookie with sess empty', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'a@a.com',
      password: 'aaaaaaaaaaaaaa',
    })
    .expect(201);
  let response = await request(app).get('/api/users/signout').expect(200);
  expect(response.get('Set-Cookie')[0]).toEqual(
    'express:sess=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly'
  );
});
