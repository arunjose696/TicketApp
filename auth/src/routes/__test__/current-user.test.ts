import request from 'supertest';
import { app } from '../../app';
it('checks if current user is set in response', async () => {
  const cookie = await getCookie();

  let response = await request(app)
    .get('/api/users/currentuser')
    .set('Cookie', cookie);

  //expect(response.body.get('currentUser')).toBeDefined();
  console.log(response.body);
  expect(response.body).toMatchObject({
    currentUser: {
      email: 'a@a.com',
    },
  });
});
