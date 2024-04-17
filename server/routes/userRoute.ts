import { Request, Response, Router } from "express";
import {checkSchema, matchedData, validationResult} from 'express-validator'
import gravatar from 'gravatar'
import brcypt from 'bcryptjs'
import {createUserValidationschema} from '../middleware/validator/createUserValidationschema'
import User from "../dataLayer/schema/User";

const userRouter = Router()

userRouter.get('/', async (req, res)=> {
    try {
        const users = await User.find()
        
        if(users.length > 0) {
            res.status(200).send(users)
        }

    } catch (error) {
        if(error instanceof Error) {
            res.status(5000).send(error.message)
        }
    }
})

userRouter.post('/add', checkSchema(createUserValidationschema),  async (req:Request, res:Response)=> {
    
const err = validationResult(req)
    if(!err.isEmpty()) {
        res.status(400).send({errors: err.array()})
    }

    const {firstName, lastName, email, password} = matchedData(req)

    try {
        const userExists = await User.findOne({email})
        if(userExists) {
            res.status(400).send('User already Exists')
        }
        const avatar = gravatar.url(email, {
            s:'200',
            r:'pg',
            d:'mm'
        })
        const user = new User({
            firstName,
            lastName,
            email,
            password,
            avatar

        })

        const salt =  brcypt.genSaltSync(10)
        user.password = brcypt.hashSync(password, salt)

        await user.save()

        res.status(201).send('Account Created')

        
    } catch (error) {
        if(error instanceof Error) {
            res.status(500).send(error.message)
        }
        
    }
    res.status(200).send('Under development!')
})




export default userRouter