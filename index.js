require('dotenv').config()
const express=require('express')
const cors=require('cors')
const sdServer=express()
const router=require('./Route/route')

require('./DB/connection')

sdServer.use(cors())

sdServer.use(express.json())
sdServer.use(router)

const PORT=3000
sdServer.listen(PORT,()=>{
    console.log(`Educator server started at port: ${PORT}`);
})

sdServer.get('/',(req,res)=>{
    res.status(200).send("<h1>Student Details started!!! Waiting for Client request...</h1>")
})