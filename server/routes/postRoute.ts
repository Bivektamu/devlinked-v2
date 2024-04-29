import { Request, Response, Router } from "express";
import auth from '../middleware/auth'
import { checkSchema, matchedData, validationResult } from "express-validator";
import User from "../dataLayer/schema/User";
import Post from "../dataLayer/schema/Post";
const postRoute = Router()

postRoute.get('/', 
// auth,
 async (req: Request, res: Response) => {
    try {
        const posts = await Post.find()
        return res.status(200).send(posts)
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).send(error.message)
        }

    }
})

//@route    Post api/post/add
//@desc     Add post
//@access   Private
postRoute.post(
    '/add',
    // auth,
    checkSchema({
        text: {
            notEmpty: {
                errorMessage: "Text can not be empty",
            },
            isString: {
                errorMessage: "Must be string",
            },
        },
    }),
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { text } = matchedData(req)
        try {
            const user = await User.findById(req.session.user);
            if (!user) {
                return res.status(401).send('Not Authenticated')
            }
            const newPost = new Post({
                user: {
                    id: user._id,
                    avatar: user.avatar,
                    firstName: user.firstName,
                    lastName: user.lastName,
                },
                text
            });
            await newPost.save()

            return res.status(201).send('New Post Created')
        } catch (err) {
            if (err instanceof Error) {
                return res.status(500).send(err.message)
            }
        }
    }
);


export default postRoute