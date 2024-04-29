import { Request, Response, Router } from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import bcrypt from 'bcryptjs'

import { loginUserValidationschema } from "../middleware/validator/loginUserValidationSchema";
import User from "../dataLayer/schema/User";

const authRouter = Router()

authRouter.post('/login', checkSchema(loginUserValidationschema), async (req: Request, res: Response) => {
    const errs = validationResult(req)
    if (!errs.isEmpty()) {
        return res.status(400).json('Bad Credentials')
    }

    try {
        const { email, password } = matchedData(req)
        const lowerEmail = email.toLowerCase()
        const userExists = await User.findOne({
            email: lowerEmail
        })
        if (!userExists) {
            return res.status(401).json('Bad Credentials')
        }
        const isMatch = bcrypt.compareSync(password, userExists.password)


        if (!isMatch) {
            return res.status(401).json('Bad Credentials')
        }
        console.log('logged in')
        req.session.visited = true
        req.session.user = userExists._id.toString()
        return res.sendStatus(200)

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json(error.message)
        }

    }

})

authRouter.get('/status', (req, res) => {
    if (req.session.user) {
        return res.sendStatus(200)
    }
    else {
        return res.sendStatus(401)
    }
})


authRouter.post('/logout', (req, res) => {
    if (!req.session.user) {
        return res.sendStatus(401)
    }
    else {
        req.session.destroy(()=> {
            console.log('destroyed')
        })
        return res.sendStatus(200)
    }
})

export default authRouter