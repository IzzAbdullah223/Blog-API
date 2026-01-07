import express from 'express'
import dotenv from 'dotenv'
import { authRouter } from './routes/auth.js'
import cors from 'cors'
dotenv.config()

const app = express()
app.use(cors());
app.use(express.json()); 


app.use('/',authRouter)




const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Listening on PORT: ${3000}`)
})