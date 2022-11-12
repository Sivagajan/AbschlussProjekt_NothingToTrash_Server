import { json } from "express"
import { addArticleService, updateArticleService } from "../services/articleService"


export const addArticleController = async (req,res) => {

    try{
        const article = req.body
        const add = await addArticleService(article)
        console.log(add)

        res.status(200).json(adding)
    }catch(error){
        res.status(500).json({state : false})
    }
}

export const updateArticleController = async (req, res) => {

    try{
        const id = req.body.id

        const article = {
            offerTyp : req.body.offer,
            delivery : req.body.delivery,
            title : req.body.title,
            description : req.body.description,
            amount : req.body.amount,
            price : req.body.price,
            priceTyp : req.body.priceTyp,
            pic : req.body.pic,
            category : req.body.category,
            user : req.body.user
        }

        const result = await updateArticleService(id,article)
        console.log('AddArticle',result)
        res.status(200).json({state : true})

    }catch(error){
        res.status(500).json({state : false})
    }
}

