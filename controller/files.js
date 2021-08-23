
// Import model from TodoModel to Interact with the Database 

const FileModel = require('../Models/FileModel');



const FileFunctions={
    UploadFile: async(req,res)=>{
        const {filename,path,approved,type,approver_message,uploader} = req.body
        console.log(filename,path,approved,type,approver_message,uploader)
        try {
        const toSaveFile = new FileModel( {filename,path,approved,type,approver_message,uploader})
        const result = await toSaveFile.save()
        return  res.json({data:result, success:true })
        } catch (error) {
            return  res.status(404).json({ success:false , msg:error })
            
        }
      
    },
    getFilesByUser: async(req,res)=>{
        const uid = req.params.userid 
    try {
        const result = await FileModel.find({uploader:uid}).populate('uploader')
        return  res.json({data:result, success:true })


    } catch (error) {
        return  res.status(404).json({ success:false , msg:error })
            
    }
    
    },

    updateFilesByUser: async(req,res)=>{
        const uid = req.params.userid 
    try {
        const result = await FileModel.find({uploader:uid})
        return  res.json({data:result, success:true })


    } catch (error) {
        return  res.status(404).json({ success:false , msg:error })
            
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



module.exports=FileFunctions