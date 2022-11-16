import { verifyToken } from "../util/token.js"

export const verifyBearer = (req, res) => {
    try {
        const token = req.headers.authentication.split(" ")[1]
        const result = verifyToken(token)
        console.log('token',result);
        res.status(200).json({ state: true , result})

    } catch (error) {
        console.log(error);
        res.status(403).json({ state: false })
    }
}