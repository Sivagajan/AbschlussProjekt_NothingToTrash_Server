import './config.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import {router as articleRouter} from './router/articleRouter.js'
import {router as userRouter} from './router/userRouter.js'
import { verifyBearer } from './controller/authController.js'

const PORT = process.env.PORT
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/login', userRouter)
app.use('/article', articleRouter)

app.listen(PORT, ()=> console.log('NothingToTrash even the PORT is reusable', PORT))