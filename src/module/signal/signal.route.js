import Router from 'express'
import { endpoint } from './signal.endpoint.js'
const signalrouter=Router()
import * as single from './controller/signal.controller.js'
import {auth} from '../../middlewares/auth.js'
import * as validationsignal from './signal.validation.js'
import { myMulter,fileValidation } from '../../services/multer.js'
import { validation } from '../../middlewares/validation.js'
signalrouter.post('/add',myMulter(fileValidation.imag).single('image'),single.createSignal)
signalrouter.delete('/delet/:id',single.deletsignal)
signalrouter.patch('/update/:id',single.updatesignal)
signalrouter.get('/getall',single.getsignal)
signalrouter.get('/all',single.getAllsignal)

export default signalrouter
