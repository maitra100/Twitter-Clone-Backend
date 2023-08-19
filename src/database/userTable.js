const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    name:{
        type:String
    },
    tweets:[{
        type:String,
        required:true,
    }],
    following:[{
        type:String,
        required:true
    }]
  });
  
  const UserTable=mongoose.model("UserTable",userSchema);

  module.exports=UserTable;