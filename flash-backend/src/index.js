import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { connectDB } from './configs/db.js';
const app = express();
import textRouter from './routers/text.js'


app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/text/v1", textRouter)





app.listen(3000, ()=>{
    console.log("Server is running.")
});
connectDB();