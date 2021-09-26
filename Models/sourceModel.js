const mongoose = require("mongoose");
const source=new mongoose.Schema({
    source_name:{
        type: String,
        required: true
    },
    source_type:{
        type: String,
        required: true
    },
    connection_details:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    }

});
const sourceModel = mongoose.model("sourceModel" , source);

module.exports = sourceModel;
