const express = require('express')
const app = express()
const PORT = 4545
const bodyparser=require("body-parser");
const cors=require("cors");
const mongoose=require("mongoose");
app.use(bodyparser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
}); 

const sportSchema = new mongoose.Schema({
    title: String,
    description:String,
    imageUrl:String
});


const  SportModel = mongoose.model('Sport', sportSchema)

app.get("/api/sports",async (req,res)=>{
    const {title}=req.query;
    const sports=await SportModel.find();
    if(!title){
        res.status(200).send(sports)
    }
    else{
        const searchedsport=sports.filter((x)=>x.toLowerCase().trim().includes(title.toLowerCase().trim()));
        res.status(200).send(searchedsport)
    }
});
app.get("/api/sports/:id",async (req,res)=>{
   const id=req.params.id;
   const sport=await SportModel.findById(id);
   res.status(200).send(sport)
})

app.delete("/api/sports/:id",async (req,res)=>{
    const id=req.params.id;
    const deletsport=await SportModel.findById(id);
    res.status(203).send(deletsport)
})
app.post("/api/sports",async(req,res)=>{
    const {title,description,imageUrl}=req.body;
    const newSport=new SportModel({
        title: title,
        description:description,
        imageUrl:imageUrl
    })
    await newSport.save()
    res.status(203).send({
        message:`${newSport.title} posted`,
        payload:newSport
    })
})
 



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
mongoose.connect('mongodb+srv://asif_admin:Admin123@app.6i78tjn.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('Mongodb connected');
})

