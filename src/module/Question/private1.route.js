import { Router } from "express";
import {auth} from '../../middlewares/auth.js'
import { myMulter,fileValidation } from '../../services/multer.js'
import * as private1 from './controller/private1.controller.js'
import { endpoint } from "./question.endpoint.js";


const private1Router=Router();
private1Router.post('/post',auth(endpoint.createquestion),myMulter(fileValidation.imag).single('image'),private1.createPrivate1)
private1Router.delete('/delet/:id',auth(endpoint.delete),private1.deletPrivate)
private1Router.patch('/update/:id',auth(endpoint.update),myMulter(fileValidation.imag).single('image'),private1.update)
private1Router.get('/all',private1.getAll)

export default private1Router
