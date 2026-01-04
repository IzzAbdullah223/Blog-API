import express from 'express'
import dotenv from 'dotenv'
import { postRoute } from './routes/post.js'
dotenv.config()

const app = express()

app.get('/',(req,res)=>{
    res.json({
        Message:"Test"
    })
})


const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Listening on PORT: ${3000}`)
})