const mongodb = require('mongodb');
const uri = "mongodb+srv://admin:Admin@123@cluster0.leylarp.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require('mongoose');

const connectToMongo= () => {mongoose.connect(uri,()=>{
  console.log('Connected to mnogo');
})
}
module.exports = connectToMongo;