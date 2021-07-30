import { app } from "../../app";
import request from "supertest"

it("checks if signup valid email and password gives 201",async()=>{
  return request(app)
  .post("/api/users/signup")
  .send({
    email:"a@a.com",
    password:"1111111111111"
  }).expect(201)

})

it("checks if signup with  invalid email gives bad request",async()=>{
  return request(app)
  .post("/api/users/signup")
  .send({
    email:"aaaaaaaaaa",
    password:"aaaaaaaaaaaaaa"
  }).expect(400)

})

it("checks if signup with   invalid password gives validation error 400",async()=>{
  return request(app)
  .post("/api/users/signup")
  .send({
    email:"a@a.com",
    password:"1"
  }).expect(400)

})

it("checks if signup with  duplicate email causes  401",async()=>{  
  await request(app)
  .post("/api/users/signup")
  .send({
    email:"a@a.com",
    password:"aaaaaaaaaaaaaa"
  }).expect(201)  
  await request(app)
  .post("/api/users/signup")
  .send({
    email:"a@a.com",
    password:"1111111111"
  }).expect(401)
  


})




