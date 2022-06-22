const express=require('express');
const app=express();
app.use(express.json());

//products data
app.get('/',function(req,res)
{
    res.send("Hello world")
})
const products=[
{
    id:1,
    name:"vivo"
},
{
    id:2,
    name:"samsung"
},
{
    id:3,
    name:"mi"
}]

//to get all the products
app.get('/products',(req,res)=>{
    res.json(products)
})

//to get all the products by their id
app.get('/products/:id',(req,res)=>{
    const newData=products.filter(item=>item.id.toString()==req.params.id);
    return res.send(newData);
})

//to post the data
app.post('/addproducts',(req,res)=>{
    const{id,name}=req.body;
    console.log(id,name);
    return res.send('Data stored');
})

app.listen(5000,()=>console.log("server running....."));