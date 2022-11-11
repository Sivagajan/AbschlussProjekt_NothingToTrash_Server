import { getDB } from '../util/db.js'


const COL = 'user'

export const userLoginService = async (user) => {
    const db = await getDB()

    const result = await db.collection('user').findeOne({username: user.username})
    return result
}

export const addUserService = async (user) => {
    const db = await getDB()

    const result = await db.collection(COL).insertOne(user)

}