import express, {Request, Response} from 'express'
import 'dotenv/config'
import session from 'express-session'

import connectDB from '../dataLayer'
import rootRouter from '../routes/'

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 2000

connectDB()

app.use(session({
    secret:'evilmonkey',
    saveUninitialized: false, // if true then every random visitor session id stored 
    resave:false,
    cookie: {
        maxAge: 60000 * 60 // in milliseconds, so 60000 = 60 seconds
    }
}))
app.use(rootRouter)

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
})