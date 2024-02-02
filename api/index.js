const express=require('express');
const cors=require('cors')
const app=express();

app.use(cors());

app.get('/sample',(req,res)=>{
    const name='binoy';
    res.json(name)
})

app.listen(3000,()=>console.log('server started'))