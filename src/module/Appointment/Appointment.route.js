import { Router } from "express";
import * as Appoint from './controller/Appointment.controller.js'
import { auth } from "../../middlewares/auth.js";

import { endpoint } from "../Appointment/Appointment.endpoint.js";
const Appointment=Router();
Appointment.post('/add',Appoint.addAppointment)
Appointment.get('/all',Appoint.showAll)
Appointment.delete('/delet/:id',Appoint.delet)
export default Appointment
