import { model, Schema } from 'mongoose';

const tractorSchema = new Schema({
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
});

const tractorModel = model('tractor', tractorSchema);
export { tractorModel };
