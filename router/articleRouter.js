import express from 'express'
import { addArticleController, updateArticleController, getAllArticlesController, getArticleController} from '../controller/articleController'
import { checkToken } from '../middleware/verifyMiddleware'
export const router = new express.Router()

const router = new express.Router()

router.get('/',getAllArticlesController)
router.get('/article',getArticleController)
router.post('/add',checkToken, addArticleController)
router.put('/update',checkToken ,updateArticleController)
