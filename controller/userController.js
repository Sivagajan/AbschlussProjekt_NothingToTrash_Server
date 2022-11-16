import { userLoginService, addUserService, getUserService } from "../services/userService.js"
import { createToken } from "../util/token.js"

export const userLoginController = async (req, res) => {
    try{

        const user = req.body
        
        console.log('uLC',user)
        
        const result = await userLoginService(user)
        
            const token = createToken({user: result._id})
            res.status(200).json({token: token})
        
    }catch(error){
        
        res.status(500).json({message: 'Fehler beim Login'})
    }
    
}

export const getUserController = async (req,res) => {

    console.log('guC',req.body.id)
    const id = req.body.id

    try{
        const result = await getUserService(id)
        console.log('guC',result)
        res.status(200).json(result)

    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }
}

export const addUserController = async (req, res) => {

    try{
        const user = req.body
        console.log(user)

        const result = await addUserService(user)
        res.status(200).json(result)
    }catch(error){
        console.log(error)

        res.status(500).json(error)
    }
}

