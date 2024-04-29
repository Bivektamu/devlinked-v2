import { Request, Response, Router } from "express";
import { checkSchema, matchedData, validationResult } from 'express-validator'
import gravatar from 'gravatar'
import brcypt from 'bcryptjs'
import { createUserValidationschema } from '../middleware/validator/createUserValidationschema'
import User from "../dataLayer/schema/User";

const userRouter = Router()

userRouter.get('/', async (req, res) => {
    if(!req.session.user) {
        return res.status(401).json('Not authenticated')
    }

    try {
        const users = await User.find()

        return res.status(200).json(users)

    } catch (error) {
        if (error instanceof Error) {
            res.status(5000).json(error.message)
        }
    }
})

// add user
userRouter.post('/add', checkSchema(createUserValidationschema), async (req: Request, res: Response) => {

    const err = validationResult(req)
    if (!err.isEmpty()) {
        res.status(400).json({ errors: err.array() })
    }

    const { firstName, lastName, email, password } = matchedData(req)
    try {
        const lowerEmail = email.toLowerCase()

        const userExists = await User.findOne({ email: lowerEmail })
        if (userExists) {
            return res.status(400).json({error: 'User already Exists'})
        }
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })
        const user = new User({
            firstName,
            lastName,
            email:lowerEmail,
            password,
            avatar

        })

        const salt = brcypt.genSaltSync(8)
        user.password = brcypt.hashSync(password, salt)

        await user.save()

        return res.status(201).json({msg: 'Account Created'})


    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json(error.message)
        }

    }
})

// Delete user by ID
userRouter.delete('/delete/:id', async (req: Request, res: Response) => {
    if (!req.session.user || req.session.user !== req.params.id) {
        return res.status(401).json('Not Authenticated')
    }
    try {
        const { id } = req.params
        const userExists = await User.findById(id)
        if (!userExists) {
            return res.status(400).json('Bad Request')
        }

        await User.findOneAndDelete({
            _id: id
        })
        req.session.user = ''

        return res.status(201).json('Deleted')

    } catch (err) {
        if (err instanceof Error) {
            return res.status(500).json(err.message)
        }

    }
})


// Delete all users
userRouter.delete('/delete', async (req: Request, res: Response) => {
    try {
        await User.deleteMany()
        return res.status(201).json('Deleted')


    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json(error.message)
        }
    }
})




export default userRouter