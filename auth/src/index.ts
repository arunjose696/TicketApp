
import  mongoose  from "mongoose";
import {app} from "./app"
const start=async()=>{
  if(!process.env.JWT_KEY){
   throw new Error("JWT secret not loaded")
  }
  try {
    await mongoose.connect('mongodb://auth-mongo-service/auth', {useNewUrlParser: true, useUnifiedTopology: true});
    console.log("connected to mongo")
  } catch (error) {
    console.error(error)
    
  }

  app.listen(3000,()=>{ 
    console.log("listening on port 3000")
  })
  

}

start()


