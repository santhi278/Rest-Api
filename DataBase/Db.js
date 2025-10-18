var mongoose = require("mongoose")
async function connectToDatabase() {
    try{
        await mongoose.connect(process.env.MODEL_URL)
        console.log("CONNECTED TO THE DATABASE")

    }catch(error){
        console.log("error",error);
    }
}
module.exports = connectToDatabase