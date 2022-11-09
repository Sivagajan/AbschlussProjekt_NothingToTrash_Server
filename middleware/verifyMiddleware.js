import { verifyToken } from "../util/token.js"

export const checkToken = (req, res, next) => {
    try{
        const token = req.headers.authentication.split(" ")[1]
        const result = verifyToken(token)
        console.log('checkToken', result)
        next()
    }catch(error){
        res.status(500).json({state:false})
    }
}