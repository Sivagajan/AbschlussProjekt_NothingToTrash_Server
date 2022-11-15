import './config.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import {router as articleRouter, router} from './router/articleRouter.js'
import {router as userRouter} from './router/userRouter.js'
import {router as secureRouter}  from './router/secureRouter.js'

const PORT = process.env.PORT
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json({limit:'10mb', extended:true}))
app.use(express.urlencoded({limit:'10mb', extended:true, parameterLimit:50000}))

app.use('/user',userRouter)
app.use('/article', articleRouter)
app.use('/api',secureRouter)

app.listen(PORT, ()=> console.log('NothingToTrash even the PORT is reusable', PORT))