const userServices=require('../services/userTableOperations');
const tweetServices=require('../services/tweetsOperations')
const addUser=async(req,res)=>{
    try{
        const response=await userServices.addUserService(req.body);
        return res.send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}

const getId=async(req,res)=>{
    try{
        const response=await userServices.getIdService(req.params.name);
        return res.send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}

const getFollowing=async(req,res)=>{
    try{
        const response=await userServices.getFollowingService(req.params.id);
        return res.send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }

}

const editfollowers=async(req,res)=>{
    try{
        const response=await userServices.editFollowerService(req.body);
        return res.send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}

const addTweet=async(req,res)=>{
    try{
        const response=await tweetServices.addTweetService(req.body);
        return res.send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}

const getTweets=async(req,res)=>{
    try{
        const response=await tweetServices.getTweetsService(req.params.id);
        return res.send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}

const editTweet=async(req,res)=>{
    try{
        const response=await tweetServices.editTweetsService(req.body);
        return res.send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}

const deleteTweet=async(req,res)=>{
    try{
        const response=await tweetServices.deleteTweetsService(req.params);
        return res.send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}

const getUsers=async(req,res)=>{
    try{
        const response=await userServices.getUsersService(req.params.text);
        return res.send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}

const getUser=async(req,res)=>{
    try{
        const response=await userServices.getUserService(req.params.id);
        return res.send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}
module.exports={getId,addUser,editfollowers,getTweets,addTweet,editTweet,deleteTweet,getFollowing,getUsers,getUser};