
import {Schema,model,Types} from "mongoose"
const signalSchema=new Schema({
    description:{
        type:String,
        required:[true,'description is required']
    },
    image:{
        type:String
    },
   
})
const signalModel=model('signal',signalSchema)
export{signalModel}