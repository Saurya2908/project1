
// Import model from TodoModel to Interact with the Database 

const UserModel = require('../Models/Usermodel');
const TodoModel = require('../Models/Usermodel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const UserFunctions={
    signupUser: async(req,res)=>{
        const { first_name ,last_name ,  username ,  password , user_type} = req.body
       
        try {
const salt =  bcrypt.genSaltSync(saltRounds);
           
            const hash = await bcrypt.hashSync(password, salt);
            
            
            const userToSave = new UserModel({first_name ,last_name ,  username ,  password:hash, user_type})
            const result = await userToSave.save()
            let token = await jwt.sign({id:result.id ,first_name ,last_name ,  username ,  password:hash, user_type } , process.env.SECRET);

            res.cookie("Login", token, {
                secure: process.env.NODE_ENV !== "development",
                httpOnly: true,
              });


            return  res.json({data:result, success:true ,id:result.id ,token  })
        } catch (error) {
            return  res.status(404).json({ success:false  ,msg:error.message})
        }
      
    },

    checkLogin: async(req,res)=>{
        if(!req.cookies.Login){
            return res.json({success:false , message:"NOT LOGGED IN"})
        }
        try {
            console.log(req.cookies )
            var decoded = jwt.verify(req.cookies.Login, process.env.SECRET);
            res.json({token:req.cookies.Login ,success:true})
        } catch (error) {
            return res.json({success:false , message:error})
        }
       
    },

    logout:async(req,res)=>{
        if(!req.cookies.Login || req.cookies.Login==''){
            return res.json({success:true , message:"NOT LOGGED IN"})
        }
        try {
            res.cookie("Login", "", {
                secure: process.env.NODE_ENV !== "development",
                httpOnly: true,
              });
              return res.json({success:true , message:"LOGGED OUT"})
        } catch (error) {
            return res.json({success:false , message:error})
        }
       
    },


    login : async(req,res)=>{
         
        const {username , password} = req.body
     

        try {
            let data = await UserModel.findOne({ username }).exec();
            
            let token = await jwt.sign({id:data.id ,first_name:data.first_name ,last_name:data.last_name ,  username:data.username ,  password:data.password, user_type:data.user_type } , process.env.SECRET);
            
             if( await !bcrypt.compareSync(password, data.password)){
                 throw "Passowrd didnt match"
            }  


              res.cookie("Login", token, {
                secure: process.env.NODE_ENV !== "development",
                httpOnly: true,
              });
            return  res.status(200).json({ success:true , msg:"ok" , user_type:data.user_type })

        } catch (error) {
            return  res.status(404).json({ success:false , msg:error })
            
        }
    }
}



module.exports=UserFunctions