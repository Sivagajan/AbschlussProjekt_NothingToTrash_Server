import express from 'express'
import { addArticleController, updateArticleController, getAllArticlesController, getArticleController} from '../controller/articleController.js'
import { checkToken } from '../middleware/verifyMiddleware.js'


export const router = new express.Router()

router.get('/',getAllArticlesController)
router.get('/article',getArticleController)
router.post('/add',checkToken, addArticleController)
router.put('/update',checkToken ,updateArticleController)
