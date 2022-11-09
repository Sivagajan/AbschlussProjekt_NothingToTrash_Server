import './config.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import {router as userRouter} from './router/userRouter.js'

const PORT = process.env.PORT
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/login', userRouter)

app.listen(PORT, ()=> console.log('NothingToTrash even the PORT is reusable', PORT))