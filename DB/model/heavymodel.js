import mongoose, { model,Schema } from "mongoose";

const HeavySchema = new Schema({
    name: {
        type: String,
        required: true
    },
   
    questions: [{
        type: Array,
        ref: 'heavy' 
    }]
});
const TrukModel = model('heavyModel', HeavySchema);
export { TrukModel };