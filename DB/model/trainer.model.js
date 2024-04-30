import { model,Schema,Types } from "mongoose";
const trainerSchema=new Schema({
    UserName:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    createdBy:{
        type:Types.ObjectId,
        ref:'user',
        required:[true,'trainer owner is required']
    },
    publicId:String,
})
const trainerModel=model('trainer',trainerSchema)
export {trainerModel}