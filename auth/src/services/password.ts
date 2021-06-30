import crypto from "crypto"
import { scrypt,randomBytes } from "crypto";
import {promisify} from "util"
const scryptAsync = promisify(scrypt);

export class Password{

  static async hashPassword(password:string){
    const salt = randomBytes(16).toString("hex")
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;
    
    return `${buf.toString("hex")}.${salt}`;
  

  }
  static async comparePasswords(storedPassword:string,inputPassword:string){
    var [hashedPassword,salt]=storedPassword.split(".")
    const buf = (await scryptAsync(inputPassword, salt, 64)) as Buffer;
    return buf.toString("hex")===hashedPassword

  }


}