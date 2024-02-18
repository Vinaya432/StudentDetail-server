const mongoose=require('mongoose')
const connectionString=process.env.Connection_String

mongoose.connect(connectionString).then(
    ()=>{
        console.log("MongoDB Atlas Connected with sdServer");
    }
).catch((err)=>{
    console.log("MongoDB Connection Failed!!! ",err);
})