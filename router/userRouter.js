import express from 'express'
import { addUserController, userLoginController } from '../controller/userController'
import { encrypt } from '../middleware/encryptMiddleware'
export const router = new express.Router()


router.post('/register',encrypt,addUserController)
router.post('/login',encrypt,userLoginController)

