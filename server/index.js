
const express = require('express');
const mongoose=require('mongoose');
const { router } = require('./Routes/api');
const dotenv=require('dotenv');
const cors=require('cors');
const cookieParser=require('cookie-parser');
dotenv.config();


const app=express();

const PORT=process.env.PORT||4000;
const DatabaseURL=process.env.DB_URl


//connect database 
try{
    
mongoose.connect(DatabaseURL,{ useNewUrlParser: true, useUnifiedTopology: true });
console.log("Database Connected Successfully");
}
catch(error)
{
    console.log(error);
    console.log("Unable to connect Database")
}

app.listen(PORT,()=>{
    console.log("port is running on server "+PORT);
})


app.use('/uploads',express.static('uploads'))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api',router);
