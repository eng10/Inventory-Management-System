import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction, Router } from 'express'

interface userData {
  email: string
  role: string
  UserId: number
}

const expiresIn = '1d'

export const generateToken = (user: userData) => {
  const payload = user
  const token = jwt.sign(payload, process.env.secretKey || 'secretKey@@', {
    expiresIn: expiresIn,
  })
  const tokenExpiry = new Date(Date.now() + 60 * 60 * 24 * 1000)
  return { token, tokenExpiry }
}

//customuser Register

export interface customuserRequest extends Request {
  user?: userData
}
//BearerToken Bearer Token
//decodetoken

export const decodeToken = async (
  req: customuserRequest,
  res: any,
  next: NextFunction
) => {
  try {
    const token =
      req.headers.authorization?.startsWith('Bearer') &&
      req.headers.authorization?.split(' ')[1]

    if (!token) {
      return res.status(405).json({
        message: "u don't have Token",
        isSuccess: false,
      })
    }

    //decoded 

    const decode: { userId: Number; email: string; role: string } | any =
      jwt.verify(token, process.env.secretKey || 'secretKey@@')
    req.user = { ...decode }
    next()
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message : "u don't have Token ",
      isSuccess:false
    })
  }
}
