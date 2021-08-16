const express=require("express")
const FileFunctions = require("../controller/files")
const router=express.Router()

router.post('/uploadfile' , FileFunctions.UploadFile)
router.get('/getfilesbyuser/:userid', FileFunctions.getFilesByUser)

module.exports={router}
