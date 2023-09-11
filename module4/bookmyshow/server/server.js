const express = require('express');

const app = express();
const PORT = 8080;

require('dotenv').config();
const dbConfig = require('./config/dbConfig');
// const userModel = require('./models/userModel');
const userRoute = require('./routes/userRoute');

app.use(express.json());
app.use('/', userRoute);

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
})