import express from 'express'
import userRoute from './userRoute.js'
import adminRoute from './adminRoute.js'


const v1Router = express.Router()

v1Router.use('/user',userRoute)
v1Router.use('/admin',adminRoute)


export default v1Router 


