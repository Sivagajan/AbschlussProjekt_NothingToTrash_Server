import { ObjectId } from 'mongodb'
import { getDB } from '../util/db.js'


const COL = 'user'

export const userLoginService = async (user) => {

    const db = await getDB()
    const result = await db.collection(COL).findeOne({username: user.username})
    return result
}

export const addUserService = async (user) => {

    const db = await getDB()
    const result = await db.collection(COL).insertOne(user)
    return result

}

export const getUserService = async (id) => {

    const db = await getDB()
    const result = await db.collection(COL).findOne({_id:new ObjectId(id)})

    return result
}