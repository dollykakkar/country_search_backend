const mongoose = require ("mongoose")

const ConnectDb = async () => {
    try
    {
        const connect = await mongoose.connect("mongodb://localhost:27017/Country");
        console.log("connection successful");

    } catch(err){
        console.error(err);
    }
}

module.exports = ConnectDb;