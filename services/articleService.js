import { ObjectId } from "mongodb"
import { getDB } from "../util/db"


COL = 'article'

export const addArticleService = async (article) => {

    const db = await getDB()
    const result = await db.collection(COL).insertOne(article)

    return result

}


export const updateArticleService = async (id,article) => {
    
    const db = await getDB()
    const result = await db.collection(COL).updateOne({_id : new ObjectId(id)},{$set : {article}})

    return result
}