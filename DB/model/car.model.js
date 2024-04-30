import mongoose, { model,Schema } from "mongoose";
import { QuestionModel } from "./question.model.js";
const ModelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
   
    questions: [{
        type: Array,
        ref: 'question' 
    }]
});
const carModel = model('carModel', ModelSchema);
export { carModel };

