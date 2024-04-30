import { Router } from "express";
import * as trainer from './controller/trainer.controller.js'
import { endpoint } from "./trainer.endpoints.js";
import { myMulter,fileValidation } from "../../services/multer.js";
import { auth } from "../../middlewares/auth.js";
const trainerRouter=Router()
trainerRouter.post('/add',auth(endpoint.createtrainer),myMulter(fileValidation.imag).single('image'),trainer.createTrainer)
trainerRouter.delete('/delet/:id',auth(endpoint.delete),trainer.deletTrainer)
trainerRouter.patch('/update/:id',auth(endpoint.update),trainer.updateTrainer)
trainerRouter.get('/find',trainer.getTrainer)
trainerRouter.get('/all',trainer.getalltrainer)
export default trainerRouter