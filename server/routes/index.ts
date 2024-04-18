import { Router } from "express";
import userRouter from "./userRoute";
import authRouter from "./authRoute";

const rootRouter = Router()
rootRouter.get('/api', (req,res)=> {
    console.log(req.session.id)
    req.session.visited = true
    res.status(200).send('Hi there')
})
rootRouter.use('/api/users', userRouter)
rootRouter.use('/api/', authRouter)

export default rootRouter