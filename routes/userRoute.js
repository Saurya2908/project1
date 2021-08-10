const express=require("express")
const UserFunctions = require("../controller/User")
const router=express.Router()

router.post('/register' , UserFunctions.signupUser)
router.get('/check' , UserFunctions.checkLogin)
router.post('/login' , UserFunctions.login  )
router.get('/logout' , UserFunctions.logout  )
module.exports={router}
