
import { heavyModel } from "../../../../DB/model/heavy.model.js";
import { TrukModel } from "../../../../DB/model/heavymodel.js";

import cloudinary from "../../../services/cloudinary.js";

 export const addModel=async(req,res)=>{
    try{
const {name}=req.body
const find =await TrukModel.findOne({name:name});
if(find){
    res.status(400).json({message:"النموذج موجود مسبقا"})
}else{
    const add= new TrukModel({name:name});
    const save=await add.save()
    res.status(200).json({message:"تمت الاضافة بنجاح",save})
}
    }catch(error){
        res.status(400).json({message:"errorr",error})
    }
}
 
  
export const addQuestionToModel = async (req, res) => {
    try {
        const { question, options, correctAnswer } = req.body;
        const { modelId } = req.params;

        let mainImageUrl = null;
        if (req.files && req.files.image) {
            const mainImage = req.files.image[0];
            const { secure_url } = await cloudinary.uploader.upload(mainImage.path, { folder: `school/question/` });
            mainImageUrl = secure_url;
        }

        const newOptions = await Promise.all(options.map(async (option, index) => {
            const text = option.text;
            let optionImage = null;

            if (req.files && req.files[`options[${index}][image]`]) {
                const optionFile = req.files[`options[${index}][image]`][0];
                const { secure_url } = await cloudinary.uploader.upload(optionFile.path, { folder: `school/option/` });
                optionImage = secure_url;
            }

            return {
                text: text,
                image: optionImage,
                code: String.fromCharCode(97 + index) 
            };
        }));

        let correctAnswerData = null;
        if (correctAnswer.text || req.files && req.files['correctAnswer[image]']) {
            correctAnswerData = {
                text: correctAnswer.text,
                image: null,
                code: correctAnswer.code 
            };
            if (req.files && req.files['correctAnswer[image]']) {
                const correctAnswerImage = req.files['correctAnswer[image]'][0];
                const { secure_url } = await cloudinary.uploader.upload(correctAnswerImage.path, { folder: `school/correctAnswer/` });
                correctAnswerData.image = secure_url;
            }
        }

        const newQuestion = await heavyModel.create({
            question,
            options: newOptions,
            correctAnswer: correctAnswerData,
            modelId,
            image: mainImageUrl
        });

        const updatedModel = await TrukModel.findOneAndUpdate(
            { _id: modelId },
            { $push: { questions: newQuestion } },
            { new: true }
        );

        res.status(200).json({ message: "Question added successfully", updatedModel });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Error adding question" });
    }
};



  
 export const deletModel=async(req,res)=>{
    const {id}=req.params;
    const findModel=await TrukModel.findByIdAndDelete(id);
    if(!findModel){
        res.status(400).json({message:"not found"})
    }else{
        res.status(200).json("تم الحذف بنجاح")
    }
}
export const deletQuestionFromModel=async(req,res)=>{
    try{
        const {modelId,questionId }=req.params;
      
        const deletQuestion=await heavyModel.findById(questionId);
    
        if(!deletQuestion){
            res.status(400).json({message:"السؤال مش موجود"})
        }else{
            const delet=await TrukModel.findByIdAndUpdate(modelId,{$pull:{questions:deletQuestion}},{new:true})
         
            if(delet){
                res.status(200).json({message:"delet sucsses",delet})
            }else{
                res.status(400).json("error in delet")
            }
        }
    }catch(error){
        res.status(400).json({message:"errorr",error})
    }
  
}

 export const showQuestioninModel=async(req,res)=>{
   const {id }=req.params;
   const findModel=await TrukModel.findById(id);
   if(!findModel){
    res.status(400).json({message:"النموذج مش موجود"})
   }else{
    res.status(200).json({questions: findModel.questions})
   }
}

export const showModel=async(req,res)=>{
   const findModel=await TrukModel.find({});
   if(!findModel){
    res.status(400).json({message:"الcنموذج مش موجود"})
   }else{
    res.status(200).json({mssage:"sucsses",findModel})
   }

}
export const updateModel=async(req,res)=>{
    
}
