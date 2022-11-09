import { userLoginService } from "../services/userService.js"
import { createToken } from "../util/token.js"

export const userLoginController = async (req, res) => {
    const user = req.body

    console.log(user)

    const result = await userLoginService(user)

    if(result.password === user.password){
        const token = createToken({user: result._id})
        res.status(200).json({token: token})
    }else{
        res.status(200).json({message: 'Fehler beim Login'})
    }
}