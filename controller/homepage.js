
// Import model from TodoModel to Interact with the Database 

const TodoModel = require('../Models/TodoModel');



const homepageFunctions={
    getAllTodos: async(req,res)=>{
        // goes to the database and finds all the matching things 
        try {
            const result = await TodoModel.find();
            return  res.json({data:result, success:true })
        } catch (error) {

            //  if there is an error connecting to the database or with the collection then try cath block will help us return a 404 status 
            return  res.status(404).json({ success:false  })
        }
      
    },


    createTodos: async(req,res)=>{
        // Data in post requests are saved in Body of the Request    '' req.body '' 
        const {id , name , completed} = req.body

        
        try {
            // Create an object of the model class to validate and check for errors 
            const toSaveTodo = new TodoModel({name , id , completed})
            //  .save() method saves the data to the database and is an asynchronus process
            const result = await toSaveTodo.save()
            return  res.json({data:result, success:true })
        } catch (error) {
            return  res.status(404).json({ success:false , msg:error })
            
        }
    }
}



module.exports=homepageFunctions