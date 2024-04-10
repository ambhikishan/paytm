const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/paytm?directConnection=true")

const userSchema = new mongoose.Schema({userName:String,firstName:String, lastName:String,password:String});
const accountSchema = new mongoose.Schema({userId:mongoose.Schema.Types.ObjectId, balance:Number});


const accounts = mongoose.model("Accounts", accountSchema)
const  pusers = mongoose.model("paytmusers",userSchema);



module.exports ={pusers, accounts};
