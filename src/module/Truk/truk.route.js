import { Router } from "express";
import * as truk from '../Truk/controller/truk.controller.js'
import { myMulter,fileValidation } from "../../services/multer.js";
myMulter
const trukRouter=Router();
trukRouter.post('/add',truk.addModel)
trukRouter.post('/addquestion/:modelId',myMulter(fileValidation.imag).fields([
    {name:"image",maxCount: 1},
    { name: 'options[0][image]', maxCount: 1 },
    { name: 'options[1][image]', maxCount: 1 },
    { name: 'options[2][image]', maxCount: 1 },
    { name: 'options[3][image]', maxCount: 1 },
    {name:'correctAnswer[image]',maxCount:1}
]),truk.addQuestionToModel);
trukRouter.delete('/delet/:id',truk.deletModel);
trukRouter.delete('/deletQuestion/:modelId/:questionId',truk.deletQuestionFromModel)
trukRouter.get('/all/:id',truk.showQuestioninModel)
trukRouter.get('/all',truk.showModel)
export default trukRouter 