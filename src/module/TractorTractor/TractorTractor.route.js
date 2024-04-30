import { Router } from "express";
import * as tractotrModel from '../TractorTractor/controller/TractorTractor.controller.js'

import { myMulter,fileValidation } from '../../services/multer.js'
const tractotrtractorModel=Router();
tractotrtractorModel.post('/add',tractotrModel.addModel)
tractotrtractorModel.post('/addquestion/:modelId', myMulter(fileValidation.imag).fields([
    {name:"image",maxCount: 1},  
    { name: 'options[0][image]', maxCount: 1 },
    { name: 'options[1][image]', maxCount: 1 },
    { name: 'options[2][image]', maxCount: 1 },
    { name: 'options[3][image]', maxCount: 1 },
    {name:'correctAnswer[image]',maxCount:1}  
]), tractotrModel.addQuestionToModel);
tractotrtractorModel.delete('/delet/:id',tractotrModel.deletModel);
tractotrtractorModel.delete('/deletQuestion/:modelId/:questionId',tractotrModel.deletQuestionFromModel)
tractotrtractorModel.get('/all/:id',tractotrModel.showQuestioninModel)
tractotrtractorModel.get('/all',tractotrModel.showModel)  
    
export default tractotrtractorModel  