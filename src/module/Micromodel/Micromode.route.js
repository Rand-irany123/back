import { Router } from "express";
import * as Micro from './controller/Micromodel.controller.js'

import { myMulter,fileValidation } from '../../services/multer.js'
const MicroTrukModel=Router();
MicroTrukModel.post('/add',Micro.addModel)
MicroTrukModel.post('/addquestion/:modelId',myMulter(fileValidation.imag).fields([
    {name:"image",maxCount: 1},
    { name: 'options[0][image]', maxCount: 1 },
    { name: 'options[1][image]', maxCount: 1 },
    { name: 'options[2][image]', maxCount: 1 },
    { name: 'options[3][image]', maxCount: 1 },
    {name:'correctAnswer[image]',maxCount:1}
]),Micro.addQuestionToModel)
MicroTrukModel.delete('/delet/:id',Micro.deletModel);
MicroTrukModel.delete('/deletQuestion/:modelId/:questionId',Micro.deletQuestionFromModel)
MicroTrukModel.get('/all/:id',Micro.showQuestioninModel)
MicroTrukModel.get('/all',Micro.showModel)

export default MicroTrukModel  