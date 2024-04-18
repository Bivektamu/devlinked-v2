import { Request, Response, Router } from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import bycrypt from 'bcryptjs'

import {loginUserValidationschema} from "../middleware/validator/loginUserValidationSchema";
import User from "../dataLayer/schema/User";

const authRouter = Router()

authRouter.post('/login', checkSchema(loginUserValidationschema), async (req:Request, res:Response)=> {
    const errs = validationResult(req)
    if(!errs.isEmpty()) {
        return res.status(400).send({error: errs})
    }

    try {
        const {email, password} = matchedData(req)
        const userExists = await User.findOne({
            email
        })
        if(!userExists) {
            return res.status(401).send('Bad Credentials')
        }
        const salt = bycrypt.genSaltSync(10)
        const isMatch = bycrypt.compareSync(password, userExists.password)
        console.log(isMatch)
        if(!isMatch) {
            return res.status(401).send('Bad Credentials')
        }
        req.session.visited = true
        req.session.user = userExists._id.toString()
        return res.status(200).send('Logged In')

    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).send(error.message)
        }
        
    }

})

export default authRouter