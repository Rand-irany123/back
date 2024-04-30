import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
import { userModel } from '../../../../DB/model/user.model.js';
export const signup=async(req,res)=>{
    try{
const {password,userName,email}=req.body;
const user=await userModel.findOne({email:email})

if(user){
    res.status(400).json({message:"البريد موجود من قبل "})
}else{
    const hash=await bcrypt.hash(password,parseInt(process.env.saltRound))
   
    
    const newUser=await userModel({userName:userName,password:hash,email:email})
    const save= await  newUser.save()
    res.status(200).json({message:"sucsses",save})
}
    }catch(error){
        res.status(400).json({message:" internal server error" , error})  
    }
}
export const signin=async(req,res)=>{
    try{
    
    const {password,email}=req.body
    const user=await userModel.findOne({email:email})
   
    if(!user){
        res.status(400).json({message:"هذا البريد غير مسجل "})
    }else{
        const match=await bcrypt.compare(password,user.password)
     
        if(! match){
            res.status(400).json({message:'يرجى التأكد من صحة كلمة المرور '})
        }else{
            const token=await jwt.sign({id:user._id,email:user.email,userName:user.userName,role:user.role},process.env.logintoken)
            res.status(200).json({message:"sucess",token})   
        }
    }
    }catch(error){
res.status(500).json({message:`catch error ${error}`})
    }
    
}