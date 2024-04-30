
import {model,Schema,Types, mongoose} from 'mongoose'
const lightSchema=new Schema({
  question: {
    type: String,
    required: true
},
image: {
    type: String,
},  
options: [{
    text: String,
    image: String,
    code: String 
}],
correctAnswer: {
    text: String,
    image: String,
    code: String 
},
      modelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ligtTrukModel', 
        required: true
      },
 
})
const lightModel=model('light',lightSchema)
export{lightModel}