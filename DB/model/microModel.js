import mongoose, { model,Schema } from "mongoose";

const MicroSchema = new Schema({
    name: {
        type: String,
        required: true
    },
   
    questions: [{
        type: Array,
        ref: 'micro' 
    }]
});
const MicrotrukModel = model('microtrukmodel', MicroSchema);
export { MicrotrukModel };