import { Router } from "express";
import {auth} from '../../middlewares/auth.js'
import { myMulter,fileValidation } from '../../services/multer.js'
import { endpoint } from "./taractor.endpoint.js";
import * as taractor from './conroller/tractor.controller.js'
const tractorRouter=Router();
tractorRouter.post('/add',auth(endpoint.createquetion),myMulter(fileValidation.imag).single('image'),taractor.createtractor)
tractorRouter.delete('/delet/:id',auth(endpoint.delet),taractor.deletTaractor)
tractorRouter.patch('/update/:id',auth(endpoint.update),myMulter(fileValidation.imag).single('image'),taractor.update)
tractorRouter.get('/all',taractor.getAll)
export default tractorRouter
