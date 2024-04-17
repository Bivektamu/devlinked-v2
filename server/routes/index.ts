import { Router } from "express";
import userRouter from "./userRoute";

const rootRouter = Router()
rootRouter.get('/api', (req,res)=> {
    res.status(200).send('Hi there')
})
rootRouter.use('/api/users', userRouter)

export default rootRouter