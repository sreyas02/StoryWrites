const mongoose = require('mongoose');

// connecting to the database using mongoose and async await syntax 
mongoose.set("strictQuery", false);

const connectDB = async () => {
    try{
    const conn = await mongoose.connect(process.env.MONGO_URI, {
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }
}

// exproting the function to be used in app.js
module.exports = connectDB;

