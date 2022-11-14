import { ObjectId } from 'mongodb'
import { getDB } from '../util/db.js'


const COL = 'users'

export const userLoginService = async (user) => {

    const db = await getDB()
    console.log('uLS',user.username)

    const result = await db.collection(COL).findOne({username: user.username})
    console.log('uLS',result.username)

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
    console.log(result)

    return result
}