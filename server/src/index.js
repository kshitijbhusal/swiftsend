
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './configs/db.js';
const app = express();
import textRouter from './routers/text.js';

const port = process.env.PORT || 3000
const frontendOrigin = process.env.FRONTEND_ORIGIN

dotenv.config({ path: '../.env' });


const corsOptions = {
    origin: `${frontendOrigin}`, // Replace with your actual frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Allowed request headers
    credentials: true, // Allow cookies and HTTP authentication credentials
    optionsSuccessStatus: 204 // Some legacy browsers (IE11, various SmartTVs) choke on 200
};

app.use(cors(corsOptions));



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
   
// parse application/json
app.use(bodyParser.json())

app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});


app.use("/text/v1", textRouter)





app.listen(port, ()=>{
    console.log(`Server is running at port ${port} `)
    connectDB();   
});
