import { signalModel } from "../../../../DB/model/signal.model.js";
import cloudinary from '../../../services/cloudinary.js'
import {pagination} from '../../../services/pagination.js'




export const createSignal=async(req,res)=>{
    try{
const {description,image}=req.body;
const findSignal=await signalModel.findOne({description:description});
if(findSignal){
  return  res.status(400).json({message:"ها الوصف موجود مسبفا"})
}

if(!req.file){
    return res.json({message:'upload image please'})
}
const {secure_url}=await cloudinary.uploader.upload(req.file.path,{folder:`school/schools/`})

req.body.image=secure_url
const signal=await signalModel.create(req.body)
if(!signal){
    return res.json({message:'fail'})
}else{
    res.status(200).json({message:'sucess',signal})
}
    }catch(error){
        res.status(400).json({message:" catch error",error})
    }
}













export const deletsignal=async(req,res)=>{
    const {id}=req.params;
    const delet=await signalModel.findByIdAndDelete(id);
    if(!delet){
        res.status(400).json({message:"لايمكن  حذف هذه الاشارة"})
    }else{
        res.status(200).json({message:"success"})
    }
}






 export const updatesignal=async(req,res)=>{
    try{
const {description,image}=req.body;
const {id}=req.params;

const findsignal=await signalModel.findById(id);

if(!findsignal){
    res.status(400).json({message:"مش موجودة"})
}else{
    if(req.file){
        const {secure_url}=await cloudinary.uploader.upload(req.file.path,{folder:`school/schools/`})
       
   
        req.body.image=secure_url;
    }
    const updatesignal=await signalModel.findByIdAndUpdate(id,req.body,{new:false});
    if(!updatesignal){
        return res.status(400).json({message:"faild to update"})
    }
    await cloudinary.uploader.destroy(updatesignal)
    return res.status(200).json({message:"success",updatesignal})
}
    }catch(error){
        res.status(400).json({message:"error",error})
    }
}





export const getsignal=async(req,res)=>{
    try{
const signal=await signalModel.find({})
if(!signal){
    res.status(400).json({message:"ما في اي اشارة"})
}else{
    res.status(200).json({message:'الاشارات',signal})
}
    }catch(error){
        res.status(400).json({message:"error",error})
    }
}




export const getAllsignal=async(req,res)=>{
    try{
let {page,size}=req.query
let {limit ,skip}=pagination(page, size)
if(!size||size<=0){
    limit=9
    size=9
}
if(!page || page<=0){
    console.log("true")
    page=1
}
let startIndex=(page-1)*limit
let lastindex=page*limit
const signal=await signalModel.find({}).maxTimeMS(20000)
let result={};
const totalUser=signal.length
const pageCount=Math.ceil(signal.length/limit)
let next
if(lastindex<signal.length){
    next={
        page:page+1
    };
}  
let prev;
if(startIndex>0){
    prev={
        page:page-1
    }
}
result=signal.slice(startIndex,lastindex)
if(!result){
    return res.status(400).json({ message: 'fail' });
}
return res.status(200).json({
    message:"success",
    totalUser,
    pageCount,
    next,
    prev,
    result,
})
    }catch(error){
        res.status(400).json({message:"error",error})
    }
}