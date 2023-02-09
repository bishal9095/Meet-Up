const getDb = require('../util/database').getDb;
class User {
     constructor(/*age, image, info1, info2, info3, info4, location, match,name */  username, password, email) {
//       //this.age = age;
//       //this.image = image;
//       //this.info1 = info1;
//       //this.inf2 = info2;
//       //this.info3 = info3;
//       //this.info4 = info4;
//       //this.location = location;
//       //this.match = match;
//       //this.name = name;
       this.username=username;
       this.password=password;
       this.email=email;
     }
     save(){
         const db = getDb();
         return db.collection('users')
         .insertOne(this)
        .then(result=>{
            console.log("Successful from save method"+result);
        })
        .catch(err =>{
             console.log(err);
        });
    } 
    async finOne(obj){
        db=getDb();
        const coll=db.collection('users');
        const result = await coll.findOne(obj);
        return result
    }
};
 
/*const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
  });
  const User=mongoose.model('user',UserSchema);
//   User.createIndexes()*/
  module.exports  =  User;
//