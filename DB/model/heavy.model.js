import { model, Schema } from 'mongoose';


const heavySchema = new Schema({
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

const heavyModel = model('heavy', heavySchema);
export {heavyModel}