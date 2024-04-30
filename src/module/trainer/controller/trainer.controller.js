import { trainerModel } from "../../../../DB/model/trainer.model.js";
import cloudinary from "../../../services/cloudinary.js";
import { pagination } from "../../../services/pagination.js";
export const createTrainer=async(req,res)=>{
    try{
const { UserName,image}=req.body;
req.body.createdBy=req.user._id
if(!req.file){
    return res.status(400).json({message:"الصورة مطلوبة "})
}

const {secure_url,public_id}=await cloudinary.uploader.upload(req.file.path,{folder:`school/trainer/${req.user._id}`})
req.body.publicId=public_id;
req.body.image=secure_url
const trainer=await trainerModel.create(req.body)
if(!trainer){
    return res.status(400).json({message:'fail'})
}else{
    res.status(200).json({message:'sucess',trainer})
}
    }catch(error){
        res.status(400).json({message:"error",error})
    }
}
export const deletTrainer=async(req,res)=>{
    try{
        const {id}=req.params;
        const find=await trainerModel.findByIdAndDelete(id);
        if(!find){
    res.status(400).json({message:'المستخدم مش موجود'})
        }else{
            res.status(200).json({message:"تم الحذف بنجاح"})
        }
    }catch(error){
        res.status(400).json({message:"error",error})
    }

}
  export const updateTrainer=async(req,res)=>{
    try{
        const {UserName,image}=req.body;
        const {id}=req.params;
        
        const findtrainer=await trainerModel.findById(id);
        
        if(!findtrainer){
            res.status(400).json({message:"مش موجودة"})
        }else{
            if(req.file){
                const {secure_url,public_id}=await cloudinary.uploader.upload(req.file.path,{folder:`school/trainer/${req.user._id}`})
               
                req.body.publicId=public_id
                req.body.image=secure_url;
            }
            const updatetrainer=await trainerModel.findByIdAndUpdate(id,req.body,{new:false});
            if(!updatetrainer){
                return res.status(400).json({message:"faild "})
            }
            await cloudinary.uploader.destroy(updatetrainer.publicId)
            return res.status(200).json({message:"sucsses",updatetrainer})
        }
            }catch(error){
                res.status(400).json({message:"error",error})
            }
        }
  
export const getTrainer=async(req,res)=>{
    try{
const find=await trainerModel.find({})
if(!find){
    res.status(400).json({message:"لا يوجد متدربين ليتم عرضهم"})
}else{
    res.status(200).json({message:"المتدربين",find})
}
    }catch(error){
        res.status(400).json({message:"error",error})
    }
}
 export const getalltrainer=async(req,res)=>{
    try{
        let {page,size}=req.query
        let {limit ,skip}=pagination(page, size)
        if(!size||size<=0){
            limit=8
            size=8
        }
        if(!page || page<=0){
            console.log("true")
            page=1
        }
        let startIndex=(page-1)*limit
        let lastindex=page*limit
        const trainer=await trainerModel.find({}).maxTimeMS(20000)
        let result={};
        const totalUser=trainer.length
        const pageCount=Math.ceil(trainer.length/limit)
        let next
        if(lastindex<trainer.length){
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
        result=trainer.slice(startIndex,lastindex)
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
 