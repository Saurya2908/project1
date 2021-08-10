// Dependencies..
const express=require("express")
require("dotenv").config()
const db= require('./connections/db')
const mongoose=require('mongoose')
const app=express()
const PORT=process.env.PORT|5000
const {router:homepageRoutes}=require("./routes/homepage")

// App Defaults..

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api",homepageRoutes)

//  /api/v2/  1.get request with new model 
//  /api/v2/  2.post request with new model 







// Start Server..
app.listen(PORT,()=>console.log(`the server is running on ${PORT}`))