import { Router } from "express";
import * as car from './controller/car.controller.js'

import { myMulter,fileValidation } from '../../services/multer.js'
const carRouter=Router();
carRouter.post('/add',car.addModel)
carRouter.post('/addquestion/:modelId',myMulter(fileValidation.imag).fields([
    {name:"image",maxCount: 1},
    { name: 'options[0][image]', maxCount: 1 },
    { name: 'options[1][image]', maxCount: 1 },
    { name: 'options[2][image]', maxCount: 1 },
    { name: 'options[3][image]', maxCount: 1 },
    {name:'correctAnswer[image]',maxCount:1}
]),car.addQuestionToModel)
carRouter.delete('/delet/:id',car.deletModel);
carRouter.delete('/deletQuestion/:modelId/:questionId',car.deletQuestionFromModel)
carRouter.get('/all/:id',car.showQuestioninModel)
carRouter.get('/all',car.showModel)

export default carRouter