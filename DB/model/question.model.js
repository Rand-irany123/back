
import {model,Schema,Types,mongoose} from 'mongoose'
const QuestionSchema=new Schema({
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
})
const QuestionModel=model('question',QuestionSchema)
export{QuestionModel}