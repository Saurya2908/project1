const mongoose = require("mongoose");
const Schema = mongoose.Schema
const FileSchema = new mongoose.Schema({
  
    filename: {
        type: String,
        required: true,
      },
      path : {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,

    },
    approved:{
        type: Boolean,
        required: true,
        default:false
    },
    approver_message:{
        type:String,
        default:""
    },
    uploader:{ type: Schema.Types.ObjectId, ref: 'UserModel' , required:true }
},
{timestamps:true}
);

const FileModel = mongoose.model("FileModel" , FileSchema);

module.exports = FileModel;
