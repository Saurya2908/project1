// Dependencies..
const express=require("express")
require("dotenv").config()
const  cookieParser = require( "cookie-parser")
const db= require('./connections/db')
const mongoose=require('mongoose')
const app=express()
const PORT=process.env.PORT|5000
const {router:homepageRoutes}=require("./routes/homepage")
const {router:UserRoutes}=require("./routes/userRoute")


// App Defaults..
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/home",homepageRoutes)
app.use("/api/user" , UserRoutes)







// Start Server..
app.listen(PORT,()=>console.log(`the server is running on ${PORT}`))