/*import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
colors.enable()

dotenv.config({path:__dirname + './env'})
const mongo_uri = process.env.MONGO_URI;
mongoose.connect(mongo_uri, {});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDb database connection established successfully");

})
*/

const moongoose = require('mongoose');

const connectDB = async() =>{
    try{
        const con = await moongoose.connect(process.env.MONGO_URI,{

        })
        console.log(`MongoDB connected:${con.connection.host}`);
    }
    catch(err)
    {
        console.log(err);
        process.exit(1);
    }
}


module.exports = connectDB
