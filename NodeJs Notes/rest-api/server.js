const express = require('express');
const mongoose = require('mongoose');
const BrandName = require('./model');

const app = express();

app.use(express.json())

mongoose.connect('mongodb+srv://madhu123:madhu123@cluster0.lmkhh.mongodb.net/Sample?retryWrites=true&w=majority',
{
     useUnifiedTopology: true,
     useNewUrlParser: true
     }).then(
    () => console.log('DB connected...')
).catch(err => console.log(err))

app.post('/addbrands',async (req,res) => {
    const {brandname} = req.body ;
    try{
        const newData = new BrandName({brandname});
        await newData.save();
        return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err.message);
    }
})

app.get('/getallbrands',async (req,res) => {
    try {
        const allData = await BrandName.find();
        return res.json(allData);
    }
    catch(err){
        console.log(err.message);
    }
})

app.get('/getallbrands/:id', async (req,res) => {
    try{
        const Data = await BrandName.findById(req.params.id)
        return res.json(Data);
    }
    catch(err){
        console.log(err.message);
    }
})

app.delete('/deletebrand/:id',async (req,res)=>{
    try{
        await BrandName.findByIdAndDelete(req.params.id);
        return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err.message);
    }
})

app.listen(5000,()=>console.log('Server running...'))