import { Router } from "express";
import * as auth from '../auth/controller/auth.controller.js'
import { validation } from "../../middlewares/validation.js";
import * as validationAuth from '../auth/auth.validation.js'
const router=Router();
router.post('/signup',validation(validationAuth.signup),auth.signup)
router.post('/login',validation(validationAuth.signin),auth.signin)
export default router