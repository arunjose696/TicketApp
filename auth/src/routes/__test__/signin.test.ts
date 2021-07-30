import { app } from "../../app";
import request from "supertest"
it("checks if signin with wrong email gives bad request 401",async()=>{
  return request(app)
  .post("/api/users/signin")
  .send({
    email:"a@a.com",
    password:"1111111111111"
  }).expect(401)

})

it("checks if signin with right emai and password gives 200",async()=>{
  await request(app)
  .post("/api/users/signup")
  .send({
    email:"a@a.com",
    password:"aaaaaaaaaaaaaa"
  }).expect(201)  

  let response =await request(app)
  .post("/api/users/signin")
  .send({
    email:"a@a.com",
    password:"aaaaaaaaaaaaaa"
  }).expect(200)


})

it("checks if signup user has a cookie in response",async()=>{
  let response=await request(app)
  .post("/api/users/signup")
  .send({
    email:"a@a.com",
    password:"aaaaaaaaaaaaaa"
  }).expect(201)  

  console.log(response.get("Set-Cookie"))
  expect(response.get("Set-Cookie")).toBeDefined()

})