import express from 'express'
//import { admin, authUser } from '../../middlewares/authMiddleware.js'
import { createOrder, deleteOrder, getAllOrdersAdmin, getOrderById, getUserOrders } from '../../controllers/orderController.js'
import { authUser } from '../../middlewares/authUser.js'
import { authAdmin } from '../../middlewares/authAdmin.js'

const router = express.Router()

router.route('/create').post(authUser, createOrder)
router.route('/orders').get(authUser, getUserOrders)
router.route('/all-orders').get(authUser, authAdmin, getAllOrdersAdmin)
router.route('/:id')
    .get(authUser, getOrderById)
    .delete(authUser, authAdmin, deleteOrder)


export default router