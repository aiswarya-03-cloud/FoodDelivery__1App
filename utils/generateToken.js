import jwt from 'jsonwebtoken'




export const generateUserToken = (email,userId)=>{
    const token = jwt.sign({email:email,role:'user',userId},process.env.JWT_SK)
    console.log(token)
    return token
  } 


export const generateToken = (email,role)=>{
    console.log(process.env.JWT_SK)
  const token = jwt.sign({email: email,role: role || 'none' },process.env.JWT_SK) 
   
  return token
}


//const crypto = require('crypto');
import crypto from 'crypto'

// Generate a secure random JWT secret key
const jwtSecretKey = crypto.randomBytes(64).toString('base64');

console.log('Your JWT Secret Key:', jwtSecretKey);



