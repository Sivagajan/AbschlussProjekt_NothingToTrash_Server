import { addArticleService, getAllArticlesService, getArticleService, updateArticleService } from "../services/articleService.js"


export const addArticleController = async (req,res) => {

    try{
        const article = req.body
        console.log('ADDArticle',article)
        const add = await addArticleService(article)
        console.log(add) 

        res.status(200).json(add)
    }catch(error){
        console.log(error)
        res.status(500).json({state : false})
    }
}

export const updateArticleController = async (req, res) => {

    try{
        const id = req.body._id

        const article = req.body

        console.log('UAC',article,id)

        const result = await updateArticleService(id,article)
        console.log('AddArticle',result)
        res.status(200).json({state : true})

    }catch(error){
        console.log(error)
        res.status(500).json({state : false})
    }
}

export const getAllArticlesController = async (req, res) => {

    try {
        const result = await getAllArticlesService()
        res.status(200).json(result)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({state: false})
    }
}

export const getArticleController = async (req,res) => {

    console.log(req.body.id)
    const id = req.body.id

    try {
        const result = await getArticleService(id)
        res.status(200).json(result)

    } catch (error) {
        console.log(error)
        res.status(500).json({state:false})
    }
}