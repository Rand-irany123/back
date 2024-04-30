import mongoose, { model,Schema } from "mongoose";

const busSchema = new Schema({
    name: {
        type: String,
        required: true
    },
   
    questions: [{
        type: Array,
        ref: 'public' 
    }]

    
});
const busModel = model('busModel', busSchema);
export { busModel };

