const express=require("express")
const homepageFunctions = require("../controller/homepage")
const router=express.Router()

 router.get("/",homepageFunctions.getAllTodos)
 router.post("/",homepageFunctions.createTodos)    








module.exports={router}
