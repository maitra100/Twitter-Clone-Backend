const Tweets=require('../database/tweets');
const UserTable=require('../database/userTable');

const getTweetsService=async(id)=>{
    let user=await UserTable.findOne({userId:id});
    let tweetIds=user.tweets;
    let promises=[];
    let response;
    for(let i=0;i<tweetIds.length;i++){
        const promise=Tweets.findById(tweetIds[i]);
        promises.push(promise);
    }
    let result=await Promise.all(promises);
    result.sort((a,b)=>{
        return new Date(b.date) - new Date(a.date);
    })  
    for(const element of result) {
        element.name = user.name;
   }
   console.log(result);
    return result;
}

const addTweetService=async(details)=>{
    let tweet=new Tweets({
        tweet:details.tweet,
        date:new Date(),
        name:details.name
    })
    tweet=await tweet.save();
    user=await UserTable.findOneAndUpdate({userId:details.userId},{
        $push:{tweets:tweet.id}
    },{
        new: true
      })
    return user;
}

const editTweetsService=async(details)=>{
    let tweet=await Tweets.findByIdAndUpdate(details.id,{
        tweet:details.tweet
    },{new:true});
    return tweet;
}

const deleteTweetsService=async(details)=>{
    user=await UserTable.findOneAndUpdate({userId:details.userId},{
        $pull:{tweets:{$in:[details.id]}}
    })
    let tweet=await Tweets.findByIdAndRemove(details.id);
    return tweet;
}

module.exports={addTweetService,getTweetsService,editTweetsService,deleteTweetsService}