import { Router } from "express";
import {auth} from '../../middlewares/auth.js'
import { myMulter,fileValidation } from '../../services/multer.js'
import { endpoint } from "./light.endpoint.js";
import * as light from './controller/light.controller.js'
const lightRouter=Router();
lightRouter.post('/add',auth(endpoint.createquestion),myMulter(fileValidation.imag).single('image'),light.createlight)
lightRouter.delete('/delet/:id',auth(endpoint.delete),light.deletlight)
lightRouter.patch('/update/:id',auth(endpoint.update),myMulter(fileValidation.imag).single('image'),light.update)
lightRouter.get('/all',light.getAll)
export default lightRouter;