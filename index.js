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
const {router:FileRoutes}=require("./routes/fileRoutes")
// App Defaults..
const cors = require('cors');
const whitelist = ['http://localhost:5500','http://localhost:5501', 'http://127.0.0.1:5500','http://example2.com'];
const corsOptions = {
  credentials: true, // This is important.
  origin: (origin, callback) => {
    if(whitelist.includes(origin))
      return callback(null, true)
    
      callback(new Error(`Not allowed by CORS ${origin}`));
  }
}


app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/home",homepageRoutes)
app.use("/api/user" , UserRoutes)
app.use("/api/file" , FileRoutes)
app.use('/views', express.static(process.cwd() + '/views'))
app.set('view engine', 'ejs');
app.get('/login', function(req, res) {
    res.render('login');
});




// Start Server..
app.listen(PORT,()=>console.log(`the server is running on ${PORT}`))