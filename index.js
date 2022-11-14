import './config.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import {router as articleRouter} from './router/articleRouter.js'
import {router as userRouter} from './router/userRouter.js'
import { verifyBearer } from './controller/authController.js'
import { userLoginController } from './controller/userController.js'
import { encrypt } from './middleware/encryptMiddleware.js'

const PORT = process.env.PORT
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/user/login',encrypt ,userLoginController)
app.use('/article', articleRouter)

app.listen(PORT, ()=> console.log('NothingToTrash even the PORT is reusable', PORT))