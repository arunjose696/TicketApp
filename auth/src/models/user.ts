import mongoose from 'mongoose';
import {Password} from "../services/password"
//interface for properties req to create user
interface UserAttrs{
  email:string
  password:string
}

//interface for user model

interface UserModel extends mongoose.Model<UserDoc>{
  build(attrs:UserAttrs):UserDoc
}

//interface for user document
interface UserDoc extends mongoose.Document{
  email:string
  password:string
}

const userSchema= new mongoose.Schema({
  email: String, //not typescript but mongoose type String
  password: String
},{
  toJSON:{ 
    versionKey:false,
    transform: (doc, ret, options) => {
      delete ret.password
      ret.id=ret._id
      delete ret._id
    }
  }
  
})


userSchema.statics.build=(attrs:UserAttrs) => {
  return new User(attrs)
}

userSchema.pre('save',async function(next) {
  var user=this
  if(user.isModified("password")){
    this.set("password",await Password.hashPassword(this.get("password")))
  }
  next()
  
  
})

const User=mongoose.model<UserDoc,UserModel>("User",userSchema)

const users = User.build({
  email:"ASda",
  password:"dada"

})






export {User}