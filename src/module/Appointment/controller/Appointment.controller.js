import { AppointmentModel } from "../../../../DB/model/Appointment.model.js";

export const addAppointment = async (req, res) => {
    try {
        const { userName, email, courseType, cartype, text } = req.body;
        const addAppointment = await AppointmentModel({ userName: userName, email: email, courseType: courseType, cartype: cartype, text: text })
        const save = await addAppointment.save();
        if (!save) {
            res.status(400).json({ message: "حدث خطا لم تحدث الاضافة " })
        } else {
            res.status(200).json({ message: "sucess"})
        }
    } catch (error) {
        res.status(400).json({ message: "error", error })
    }

}
export const showAll = async (req, res) => {
    try {
        const showAll = await AppointmentModel.find({})
        if (showAll) {
            res.status(200).json({ message: "sucsses", showAll })
        } else {
            res.status(400).json({ message: "لا يوجد اي مواعيد" })
        }
    } catch (error) {
        res.status(400).json({ message: "error", error })
    }
}
export const delet=async(req,res)=>{
    const {id}=req.params
    try{
const delet=await AppointmentModel.findByIdAndDelete(id)
if(!delet){
    res.status(400).json({message:"فشل غي عملية الحذف"})
}else{
    res.status(200).json({message:"تم الحذف بنجاح"})
}

    }catch(error){
        res.status(400).json({ message: "error", error })
    }
}  