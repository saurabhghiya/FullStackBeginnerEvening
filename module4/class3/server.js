const express = require('express');
const fs = require('fs');

const app = express();
const port = 8080;

const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
let products = data.products;

app.listen(port, ()=>{
    console.log(`Server is listening at ${port}`);
})

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/products',(req,res)=>{
   res.send(products);
})

app.get('/products/:id',(req,res)=>{
    let product = products.find((obj)=>obj.id == req.params.id)
    // res.send(product);
    res.send(product);
})

app.use(express.json()) //parses incoming requests with JSON payload

//POST -> create
app.post('/products',(req,res)=>{
    //req.body gets payload data from incoming requests
    // console.log(req.body);

    products.push(req.body);
    res.send('data added');
})

//UPDATE -> put
app.put('/products/:id',(req,res)=>{
    let id = req.params.id;
    let productIndex = products.findIndex(obj => obj.id == id);
    // product = req.body;
    // console.log(id);
    let product = {id:id,...req.body};
    products[productIndex] = product;
    
    res.send(`product updated ${product.title}`);
});

app.patch('/products/:id',(req,res)=>{
    let id = req.params.id;
    let productIndex = products.findIndex(obj => obj.id == id);
    let product = products[productIndex];
    products[productIndex] = {...product,...req.body};

    res.send(`data updated with patch for product id ${products[productIndex].title}`);
});

//DELETE -> delete
app.delete('/products/:id',(req,res)=>{
    let id = req.params.id;
    let productIndex = products.findIndex(obj => obj.id == id);
    // console.log(productIndex);

    if(productIndex >= 0) products.splice(productIndex,1);

    res.send(`Deleted Product ID: ${id}`);
})