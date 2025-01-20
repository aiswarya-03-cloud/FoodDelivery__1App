import express from 'express'
import {addUser,checkUser,userLogin, userLogout, userProfile,userSignup,userUpdate} from '../../controllers/userController.js'
import { authUser } from '../../middlewares/authUser.js';
import { upload } from '../../middlewares/uploadFile.js';


const router = express.Router()

router.get('/test',(req,res)=>{ res.send('This is a test request')})

router.post('/add',addUser)
router.post("/signup", userSignup);
router.post('/login',userLogin)
router.post('/logout',userLogout)
router.get('/profile',authUser,userProfile)
router.patch('/update',upload.single('image'),authUser,userUpdate)

//For Front End purpose

router.get("/check-user", authUser,checkUser);

export default router