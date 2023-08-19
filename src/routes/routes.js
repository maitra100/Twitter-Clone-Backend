const express = require('express');
const route = express.Router();
const validate=require('../middleware/validator');
const schemas=require('../middleware/schema');
const controller=require('../controllers/controller');

route.post('/newUser',validate.validator(schemas.userSchema),controller.addUser);
route.put('/following',validate.tokenValidator,validate.validator(schemas.followerSchema),controller.editfollowers);
route.get('/tweets/:id',validate.tokenValidator,controller.getTweets);
route.post('/tweets',validate.tokenValidator,validate.validator(schemas.addTweetSchema),controller.addTweet);
route.put('/tweets',validate.tokenValidator,validate.validator(schemas.editTweetSchema),controller.editTweet);
route.delete('/tweets/:id/:userId',validate.tokenValidator,controller.deleteTweet);
route.get('/following/:id',validate.tokenValidator,controller.getFollowing);
route.get('/getUsers/:text',validate.tokenValidator,controller.getUsers)
route.get('/user/:id',validate.tokenValidator,controller.getUser)
route.get('/userId/:name',validate.tokenValidator,controller.getId);

module.exports=route;