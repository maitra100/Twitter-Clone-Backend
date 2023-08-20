const joi=require('joi');
const axios=require('axios');

const validator = (schema)=>(req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    next();
};

const tokenValidator=async(req,res,next)=>{
  try{
    const token=req.headers.token;
    const response=await axios.post('http://localhost:3000/token/validate',{token});
    next();
  }
  catch(err){
    console.log(err.response.data);
    return res.status(400).send(err.response.data);
  }
};
module.exports={validator,tokenValidator};