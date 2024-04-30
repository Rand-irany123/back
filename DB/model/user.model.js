import {Types,Schema,model} from 'mongoose';
const userSchema=new Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'user',
        enum:['user','admin']
    },
})
const userModel=model('user',userSchema);
export{userModel}