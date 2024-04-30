import jwt from 'jsonwebtoken'
import { userModel } from '../../DB/model/user.model.js';
export const auth=(acssesRole=[])=>{
    return async(req,res,next)=>{
        try{
const {token}=req.headers;
if(!token.startsWith(process.env.barriartoken)){
  return  res.status(400).json({message:"invalid token"})
}else{
    const mytoken=await token.split('__')[1]
    const decode=jwt.decode(mytoken,process.env.logintoken);
    const user=await userModel.findById(decode.id)
    if(!user){
        return res.status(400).json({message:"invalid"})
    }else{
        if(!acssesRole.includes(user.role)){
            return res.status(400).json({message:'not auth user'})
        }
        req.user=user
        next();
    }
}
        }catch(error){
            res.status(400).json({message:"error",error})
        }
    }
}