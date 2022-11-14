import express from 'express'
import { addUserController, getUserController, userLoginController } from '../controller/userController'
import { encrypt } from '../middleware/encryptMiddleware'
import { checkToken } from '../middleware/verifyMiddleware'
export const router = new express.Router()


router.post('/login',encrypt, userLoginController)
router.post('/register',encrypt, addUserController)
router.get('/', getUserController)

