import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose, { Collection, mongo } from 'mongoose';
import { app } from '../app';
import request from 'supertest';
let mongod: any;
declare global {
  var getCookie: () => Promise<string[]>;
}

global.getCookie = async () => {
  let signupResponse = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'a@a.com',
      password: 'aaaaaaaaaaaaaa',
    })
    .expect(201);
  return signupResponse.get('Set-Cookie');
};

beforeAll(async () => {
  mongod = new MongoMemoryServer();
  process.env.JWT_KEY = 'asdf';
  const uri = await mongod.getUri();
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongod.stop();
  await mongoose.connection.close();
});
