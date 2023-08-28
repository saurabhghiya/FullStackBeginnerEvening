//express is a function
const express = require('express');

//invoking the server
const app = express();

/* 
http methods for CRUD operations
create => post()
update => get()
create => put()
delete => delete()
*/

//middleware is invoked using app.use() method
//Logger middleware
app.use((req,res,next)=>{
    console.log(req.method, req.ip, req.hostname, new Date());
    console.log(req.query);
    next();
})

//dummy authentication middleware
const auth = (req,res,next) => {
    console.log(req.query);
    let password = req.query.password;
    console.log(`password: `,password);
    if(password == '1234'){
        next();
    }
    else{
        res.send('Not Authorized');
    }
}

// app.use(auth);

// app.get("/", (req, res) =>{
//     // res.send('Hello World!') 
//    // res.send("<h1>Hello world</h1>") 
//     res.send({"type":"GET"})
// })

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send('Hello');
})

app.get("/users/:username", (req, res) =>{
    // res.send('Hello World!') 
   // res.send("<h1>Hello world</h1>") 
    console.log(req.params);
    res.send({"type":"GET"})
})

app.put("/", (req, res) =>{ 
    res.send({"type":"PUT"})
})

//route level middleware works for particular routes
//include middleware fn in parameters of post/put/get/delete for route level middleware
app.post("/",auth, (req, res) => { 
    res.send({"type":"POST"})
})

app.delete("/", (req, res) =>{ 
    res.send({"type":"DELETE"})
})

app.listen(8080, ()=>{
    console.log('Express server at port 8080')
})