const express = require('express');

const app = express();
const PORT = 8080;

const cors = require('cors');

require('dotenv').config();
const dbConfig = require('./config/dbConfig');
const userRoute = require('./routes/userRoute');
const movieRoute = require('./routes/movieRoute');

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/movies', movieRoute);



app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
})