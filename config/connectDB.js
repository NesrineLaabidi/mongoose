const mongoose = require('mongoose');
require("dotenv").config({path:"../.env"})
const connectDB= async ()=>{
    try{
        await mongoose.connect("process.env.MONGO_URI")
        console.log("database is connected")
    }
    catch(error) {
        error

    }

}
module.exports =connectDB