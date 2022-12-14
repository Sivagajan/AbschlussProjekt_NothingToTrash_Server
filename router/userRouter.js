import express from 'express'
import { addUserController, getUserController, userLoginController } from '../controller/userController.js'
import { encrypt } from '../middleware/encryptMiddleware.js'
import { checkToken } from '../middleware/verifyMiddleware.js'

export const router = new express.Router()


router.post('/login',encrypt, userLoginController)
router.post('/register',encrypt, addUserController)
router.post('/',checkToken, getUserController)

