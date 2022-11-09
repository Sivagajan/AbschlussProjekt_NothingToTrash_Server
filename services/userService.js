import { getDB } from '../util/db.js'

export const userLoginService = async (user) => {
    const db = await getDB()

    const result = await db.collection('user').findeOne({username: user.username})
    return result
}