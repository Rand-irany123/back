import { tractorModel } from "../../../../DB/model/tractor.model.js";
import cloudinary from "../../../services/cloudinary.js";

export const createtractor = async (req, res) => {
    try {
       
        const { question, image, options, correctAnswer } = req.body;

        const findQuestion = await tractorModel.findOne({ question: question })
     

        if (findQuestion) {
            res.status(400).json({ message: "question already exist" })
        }
        req.body.createdBy = req.user._id


        const { secure_url, public_id } = await cloudinary.uploader.upload(req.file.path, { folder: `school/question/${req.user._id}` })

        req.body.publicId = public_id
        req.body.image = secure_url
        const questions = await tractorModel.create(req.body)

        if (!questions) {
            return res.status(400).json({ message: "error", error })

        } else {
            res.status(200).json({ message: "تمت اضافة السؤال بنجاح", question })
        }
    } catch (error) {
        res.status(400).json({ message: " catch error", error })
    }

}
export const deletTaractor=async(req,res)=>{
    try {
        const { id } = req.params
        const findQuestion = await tractorModel.findByIdAndDelete(id);
        if (!findQuestion) {
            res.status(400).json({ message: 'لم يتم العثور ع السؤال ' })
        } else {
            res.status(200).json({ message: "تم الحذف بنجاح" })
        }
    } catch (error) {
        res.status(400).json({ message: "error", error });
    }
}
export const getAll=async(req,res)=>{
    const getAllPrivate=await tractorModel.find({})
    if(!getAllPrivate){
        res.status(400).json({message:"error"})
    }else{
        res.status(200).json({message:"الاسئلة ",getAllPrivate})
    }
}
export const update = async (req, res) => {
    try {
      const { question, options, correctAnswer } = req.body;
      const { id } = req.params;
  
      const findMicro = await tractorModel.findById(id);
  
      if (!findMicro) {
        return res.status(400).json({ message: " غير موجود." });
      }
  
      const updatedData = {};
      if (question) updatedData.question = question;
      if (options) updatedData.options = options;
      if (correctAnswer) updatedData.correctAnswer = correctAnswer;
  
      // فحص ما إذا كانت الصورة موجودة في الطلب
      if (req.file) {
        const { secure_url, public_id } = await cloudinary.uploader.upload(req.file.path, {
          folder: `school/question/${req.user._id}`
        });
        updatedData.image = secure_url;
        updatedData.publicId = public_id;
      }
  
      // تحديث المايكرو باستخدام البيانات المحدثة
      const update = await tractorModel.findByIdAndUpdate(id, updatedData, { new: true });
  
      res.status(200).json({ message: "تم التحديث بنجاح.", update });
    } catch (error) {
      res.status(400).json({ message: "حدث خطأ أثناء التحديث.", error: error.message });
    }
  };
  