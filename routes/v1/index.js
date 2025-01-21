import express from 'express'
import userRoute from './userRoute.js'
import adminRoute from './adminRoute.js'
import restaurantRoute from './restaurantRoute.js'
import dishRoute from './dishRoute.js'
import menuItemRoute from './menuItemRoute.js'


const v1Router = express.Router()

v1Router.use('/user',userRoute)
v1Router.use('/admin',adminRoute)
v1Router.use('/restaurant', restaurantRoute)
v1Router.use('/dish', dishRoute)
v1Router.use('/menuItem', menuItemRoute)

export default v1Router 


