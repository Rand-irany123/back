import { Router } from "express";
import {auth} from '../../middlewares/auth.js'
import { myMulter,fileValidation } from '../../services/multer.js'
import { endpoint } from "./heavy.endpoint.js";
import * as heavy from './controller/heavy.controller.js'
const heavyRouter=Router()
export default heavyRouter
heavyRouter.post ('/add',auth(endpoint.createquestion),myMulter(fileValidation.imag).single('image'),heavy.createheavy)
heavyRouter.delete('/delet/:id',auth(endpoint.delete),heavy.deletheavy)
heavyRouter.patch('/update/:id',auth(endpoint.update),myMulter(fileValidation.imag).single('image'),heavy.update)
heavyRouter.get('/all',heavy.getAll)