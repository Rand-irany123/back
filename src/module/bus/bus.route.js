import { Router } from "express";
import * as bus from './controller/bus.controller.js'
import { myMulter,fileValidation } from "../../services/multer.js";
const busRouter=Router();

busRouter.post('/add',bus.addModel)
busRouter.post('/addquestion/:modelId',myMulter(fileValidation.imag).fields([
    {name:"image",maxCount: 1},
    { name: 'options[0][image]', maxCount: 1 },
    { name: 'options[1][image]', maxCount: 1 },
    { name: 'options[2][image]', maxCount: 1 },
    { name: 'options[3][image]', maxCount: 1 },
    {name:'correctAnswer[image]',maxCount:1}
]),bus.addQuestionToModel)
busRouter.delete('/delet/:id',bus.deletModel);
busRouter.delete('/deletQuestion/:modelId/:questionId',bus.deletQuestionFromModel)
busRouter.get('/all/:id',bus.showQuestioninModel)
busRouter.get('/all',bus.showModel)
export default busRouter