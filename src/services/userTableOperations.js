const UserTable=require('../database/userTable');

const addUserService=async(details)=>{
    let user=new UserTable({
        userId:details.userId,
        name:details.userName,
        tweets:details.tweets,
        following:details.following
    })
    user=await user.save();
    return user;
}

const getIdService=async(name)=>{
    let user=await UserTable.findOne({name:name});
    if(!user) throw new Error('User does not exist');
    return user.userId;
}

const editFollowerService=async(details)=>{
    let user;
    if(details.operation==='add'){
        user=await UserTable.findOne({userId:details.userId});
        if(user.following.includes(details.followerId)===true){
            throw new Error('already following');
        }
        user=await UserTable.findOneAndUpdate({userId:details.userId},{
            $push:{following:details.followerId}
        },{
            new: true
          })
    }
    else {
        user=await UserTable.findOneAndUpdate({userId:details.userId},{
            $pull:{following:{$in:[details.followerId]}}
        })
    }
    return user;
}

const getFollowingService=async(id)=>{
    let user=await UserTable.findOne({userId:id});
    let followingIds=user.following;
    let promises=[];
    for(let i=0;i<followingIds.length;i++){
        const promise=UserTable.findOne({userId:followingIds[i]})
        promises.push(promise);
    }
    const response=await Promise.all(promises);
    const users=response;
    return users;

}

const getUsersService=async(text)=>{
    let users=await UserTable.find({});
    users=users.filter((user)=>{
        return user.name.includes(text);
    })
    return users;
}

const getUserService=async(id)=>{
    let user=await UserTable.findOne({userId:id});
    return user;
}

module.exports={getIdService,addUserService,editFollowerService,getFollowingService,getUsersService,getUserService};