const joi=require('joi');

const userSchema = joi.object({
    userId: joi.string().hex().length(24).required(),
    tweets: joi.array().items(joi.string()),
    following:joi.array().items(joi.string()),
    userName:joi.string().required()
});

const followerSchema=joi.object({
    userId:joi.string().hex().length(24).required(),
    followerId:joi.string().hex().length(24).required(),
    operation:joi.string().valid('add','remove').required()
})

const addTweetSchema=joi.object({
    userId:joi.string().hex().length(24).required(),
    tweet:joi.string().max(200).required(),
    name:joi.string()
})

const editTweetSchema=joi.object({
    id:joi.string().hex().length(24).required(),
    tweet:joi.string().max(200).required()
})

const deleteTweetSchema=joi.object({
    id:joi.string().hex().length(24).required(),
    userId:joi.string().hex().length(24).required(),
})

module.exports={userSchema,followerSchema,addTweetSchema,editTweetSchema,deleteTweetSchema}