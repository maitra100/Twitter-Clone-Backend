const mongoose=require("mongoose");

const tweetsSchema=new mongoose.Schema({
    tweet:{
        type:String,
        maximum:200,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    name:{
        type:String,
        required:true
    }
  });
  
  const Tweets=mongoose.model("Tweets",tweetsSchema);

  module.exports=Tweets;