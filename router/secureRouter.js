import { verifyBearer } from '../controller/authController.js'
import express from 'express'

export const router = new express.Router()

router.get('/verify',verifyBearer)