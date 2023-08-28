const mongoose = require('mongoose');

const password = 'naAqmmEn2MT7zjna';

const db = `mongodb+srv://saurabhghiya:${password}@cluster-sg-app.qmvohsh.mongodb.net/?retryWrites=true&w=majority`

/* 
incase of errors while connecting replace the connect method with following
mongoose.connect(db,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
*/

mongoose.connect(db).then(()=>{
    console.log('Connection Established');
}).catch((error)=>{
    console.log(error);
})