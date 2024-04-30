import { Router } from "express";
import * as contact from './controller/contact.controller.js'
import { validation } from "../../middlewares/validation.js";
import * as validationContact from '../contact/contact.validation.js'
import { auth } from "../../middlewares/auth.js";
import { endpoint } from "./contact.endpoint.js";

const contactRouter=Router()
contactRouter.post('/post',validation(validationContact.addContact),contact.contact)
contactRouter.get('/all',contact.getallContact)
contactRouter.delete('/delet/:id',contact.deletContact)
export default contactRouter