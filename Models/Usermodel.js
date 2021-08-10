const mongoose = require("mongoose");
const User = new mongoose.Schema({
  
    first_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
        unique:true,
    }, password: {
        type: String,
        required: true,
    },
  user_type: {
    type: String, //Normal Technical Super
    lowercase:true,
    enum: { values: ['normal', 'technical' , 'super'], message: '{VALUE} is not a defined user type' }
  },
  
 
});

const UserModel = mongoose.model("UserModel" , User);

module.exports = UserModel;
