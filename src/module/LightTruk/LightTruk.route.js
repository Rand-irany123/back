import { Router } from "express";
import * as light from './controller/LightTruk.controller.js'

import { myMulter,fileValidation } from '../../services/multer.js'
const lightrukRouter=Router();
lightrukRouter.post('/add',light.addModel)
lightrukRouter.post('/addquestion/:modelId',myMulter(fileValidation.imag).fields([
    {name:"image",maxCount: 1},
    { name: 'options[0][image]', maxCount: 1 },
    { name: 'options[1][image]', maxCount: 1 },
    { name: 'options[2][image]', maxCount: 1 },
    { name: 'options[3][image]', maxCount: 1 },
    {name:'correctAnswer[image]',maxCount:1}
]),light.addQuestionToModel)
lightrukRouter.delete('/delet/:id',light.deletModel);
lightrukRouter.delete('/deletQuestion/:modelId/:questionId',light.deletQuestionFromModel)
lightrukRouter.get('/all/:id',light.showQuestioninModel)
lightrukRouter.get('/all',light.showModel)

export default lightrukRouter