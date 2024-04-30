import { conactModel } from "../../../../DB/model/contact.model.js";

export const contact=async(req,res)=>{
    try{
        const { userName,email,subject,letter}=req.body;
        const newContact=await  new conactModel({userName:userName,email:email,subject:subject,letter:letter});
        const save=await newContact.save()
        if(newContact){
            res.status(200).json({message:"sucess"})
        }else{
            res.status(200).json({message:"فشل العملية حاول مرة اخرى"})
        }
    }catch(error){
        res.status(400).json({message:"error",error})
    }
   
}
export const getallContact=async(req,res)=>{
    const getcontact=await conactModel.find({});
    if(!getcontact){
        res.status(400).json({message:"لا يوجد اي رسائل "})
    }else{
        res.status(200).json({message:"جميع الرسائل",getcontact})
    }
}
export const deletContact=async(req,res)=>{
    const {id}=req.params
   const deletContact=await conactModel.findByIdAndDelete(id);
   if(!deletContact){
    res.status(400).json({message:"الرسالة غير موجودة "})
   }else{
    res.status(200).json({message:"تم الحذف بنجاح",deletContact})
   }
} 