import { Router } from "express";
import {auth} from '../../middlewares/auth.js'
import { myMulter,fileValidation } from '../../services/multer.js'
import { endpoint } from "./public.endpoint.js";
import * as public1 from './controller/public.controller.js'
const publicRouter=Router();
publicRouter.post('/add',auth(endpoint.createquestion),myMulter(fileValidation.imag).single('image'),public1.createPulic)
publicRouter.delete('/delet/:id',auth(endpoint.delete),public1.deletPublic)
publicRouter.patch('/update/:id',auth(endpoint.update),myMulter(fileValidation.imag).single('image'),public1.update)
publicRouter.get('/all',public1.getAll)
export default publicRouter