import { Router } from "express";
import { AddCart, GetCart ,updateQuantity } from "../controllers/cart.controller.js";

/* Configure Route */
const router = Router()


/* Add cart Route */
router.post('/',AddCart);
/* Get cart Route */
router.get('/',GetCart);
/* Update cart quantity*/
router.patch('/',updateQuantity);

/* Delete cart Route */
router.delete('/',(req,res)=>{

});


export default router
