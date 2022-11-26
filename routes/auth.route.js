import { Router } from "express";
import { LoginUser, signUp } from "../controllers/auth.controller";

/* Configure Route */
const router = Router()

/*Login Route */
router.post('/login',LoginUser);
/*Sign up Route */
router.post('/signup',signUp);

export default router
