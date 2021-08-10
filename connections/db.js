const mongoose=require("mongoose")


try {
    mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser: true, useUnifiedTopology: true})
} catch (error) {
    console.log(error)
}
const db = mongoose.connection
try {
    db.on('error',console.error.bind(console,'connection error'))
    db.once('open',()=>console.log('db connected'))  
} catch (error) {
    console.log(error)
    
}
module.exports=db
