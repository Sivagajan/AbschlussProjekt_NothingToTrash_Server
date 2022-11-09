import {createHmac} from 'crypto'

export const encrypt = (req, res, next) =>{
    console.log(req.body)
    const hmac = createHmac('sha256',req.body.password)
    req.body.password = hmac.digest('hex')
    console.log('encrypt',req.body.password)

    next()
}