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
    await axios.post('http://localhost:3000/token/validate',{token});
    next();
  }
  catch(err){
    return res.status(400).send(err.message);
  }
};
module.exports={validator,tokenValidator};