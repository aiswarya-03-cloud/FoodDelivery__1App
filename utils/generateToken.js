import jwt from 'jsonwebtoken'


export const generateUserToken = (email,userId)=>{
    console.log(process.env.JWT_SK)
  const token = jwt.sign({email:email,role:'user',userId}, process.env.JWT_SK)
  console.log('Token:'+token)
  return token
}


export const generateToken = (email,role)=>{
    console.log(process.env.JWT_SK)
  const token = jwt.sign({email: email,role: role || 'none' },process.env.JWT_SK)
   
  return token
}



//process.env.JWT_SK