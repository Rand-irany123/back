import mongoose, { model,Schema } from "mongoose";

const lightTrukSchema = new Schema({
    name: {
        type: String,
        required: true
    },
   
    questions: [{
        type: Array,
        ref: 'light' 
    }]
});
const lightTrukModel = model('ligtTrukModel', lightTrukSchema);
export {lightTrukModel };