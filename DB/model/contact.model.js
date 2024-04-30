
import { Schema,model } from "mongoose";

const contactSchema=new Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    letter:{
        type:String,
        required:true
    }
})
const conactModel=model('contact',contactSchema)
export{conactModel}