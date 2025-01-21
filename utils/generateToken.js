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



