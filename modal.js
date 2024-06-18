import mongoose from "mongoose";
const schema = mongoose.Schema({
    name:String,
    email:String,
    message:String
})

const data = mongoose.model('UserData',schema)

export default data
   