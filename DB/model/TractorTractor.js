import mongoose, { model,Schema } from "mongoose";

const tractorTrukSchema = new Schema({
    name: {
        type: String,
        required: true
    },
   
    questions: [{
        type: Array,
        ref: 'tractor' 
    }]
});
const tractorTrukModel = model('tractorTruk', tractorTrukSchema);
export {tractorTrukModel};