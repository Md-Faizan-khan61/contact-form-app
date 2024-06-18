import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import data from './modal.js'
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000
    
    mongoose.connect('mongodb://localhost:27017/contactData',{
       useNewUrlParser:true,
       useUnifiedTopology:true 
    }).then(()=>{
        console.log("connected to mongodb")
    }).catch((error)=>{
        console.log("error while connecting",error);
    })
    
    app.post('/data',async(req,res)=>{
        // const modifiedData = {
        //    Name:req.body.name,
        //    Email:req.body.email,
        //    Message:req.body.message
        // }
        // const info = await new data(modifiedData)
        const info = await new data(req.body)
        console.log(req.body);
        try {
            const newInfo = await info.save();
            res.status(201).json(newInfo);
          }
          catch (err) {
            res.status(400).json({ message: err.message });
          }
    })
    app.listen(PORT,()=>{
    console.log('port is running on port 5000');
})                                                                                                                                                                                                                                                                                                                                          
