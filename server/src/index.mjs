import express from 'express'
import 'dotenv'
const app = express()

const PORT = process.env.PORT || 2000
app.listen((req, res)=> {
    console.log(`Server is running on ${PORT}`)
})