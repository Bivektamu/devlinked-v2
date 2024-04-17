import express, {Request, Response} from 'express'
import 'dotenv/config'
import connectDB from '../dataLayer'
import rootRouter from '../routes/'

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 2000

connectDB()
app.use(rootRouter)

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
})