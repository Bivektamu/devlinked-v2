import express, {Request, Response} from 'express'
import 'dotenv/config'
import connectDB from '../dataLayer'
import rootRouter from '../routes/'

const app = express()
const PORT = process.env.PORT || 2000

console.log(process.env.MONGO_URI)
connectDB()
app.use(rootRouter)

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
})