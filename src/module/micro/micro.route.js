import { Router } from "express";
import {auth} from '../../middlewares/auth.js'
import { myMulter,fileValidation } from '../../services/multer.js'
import { endpoint } from "./micro.endpoints.js";
import * as micro from './controller/micro.controller.js'
const microRouter=Router()
microRouter.post('/add',auth(endpoint.createquestion),myMulter(fileValidation.imag).single('image'),micro.createMicro)
microRouter.delete('/delet/:id',auth(endpoint.delete),micro.deletmicro)
microRouter.patch('/update/:id',auth(endpoint.update),myMulter(fileValidation.imag).single('image'),micro.update)
microRouter.get('/all',micro.getAll)
export default microRouter
