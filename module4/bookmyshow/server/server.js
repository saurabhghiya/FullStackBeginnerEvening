const express = require('express');

const app = express();
const PORT = 8080;

const cors = require('cors');

require('dotenv').config();
const dbConfig = require('./config/dbConfig');
// const userModel = require('./models/userModel');
const userRoute = require('./routes/userRoute');

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoute);



app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
})