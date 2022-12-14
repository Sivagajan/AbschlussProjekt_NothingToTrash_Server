import { ObjectId } from "mongodb"
import { getDB } from "../util/db.js"


const COL = 'article'

export const addArticleService = async (article) => {

    const db = await getDB()
    const result = await db.collection(COL).insertOne(article)

    return result

}

export const updateArticleService = async (id,article) => {
    
    delete article._id
    console.log('gAS',id)

    const db = await getDB()
    const result = await db.collection(COL).updateOne({_id : new ObjectId(id)},{$set : {...article}})

    return result
}

export const getAllArticlesService = async () => {

    const db = await getDB()
    const result = await db.collection(COL).find().toArray()
    return result

}

export const getArticleService = async (id) => {

    console.log('gAS',id)

    const db = await getDB()
    const result = await db.collection(COL).findOne({_id: new ObjectId(id)})
    return result
}