import jwt from 'jsonwebtoken'

export const createToken = (claims) => {
    const token = jwt.sign(claims, process.env.JWT_SECRET, {expiresIn: '2h'})

    return token
}

export const verifyToken = (token) => {
    const result = jwt.verify(token, process.env.JWT_SECRET)

    return result
}