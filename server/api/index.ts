import express, { Request, Response } from 'express'
import 'dotenv/config'
import session from 'express-session'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import connectDB from '../dataLayer'
import rootRouter from '../routes/'

const app = express()
app.use(cors({
    origin: 'http://localhost:5173', // Replace with the origin of your React app
    credentials: true // Allow credentials
}))
app.use(express.json())
app.use((req, res, next) => {
    setTimeout(next, 1000);
});
const PORT = process.env.PORT || 2000

connectDB()

app.use(cookieParser('Hello'))
app.use(session({
    secret: 'evilmonkey',
    saveUninitialized: false, // if true then every random visitor session id stored 
    resave: false,
    cookie: {
        maxAge: 60000 * 60 // in milliseconds, so 60000 = 60 seconds
    }
}))
app.use(rootRouter)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})