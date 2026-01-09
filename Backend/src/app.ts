import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import './config/passport.js'
import { authRouter } from './routes/auth.js'
import { postRoute } from './routes/post.js'
 


const app = express()
app.use(cors());
app.use(express.json()); 

app.use('/',authRouter)
app.use('/',postRoute)


const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Listening on PORT: ${3000}`)
})