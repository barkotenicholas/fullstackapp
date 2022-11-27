import { Router } from "express";
import { AddProduct, GetAllProducts } from "../controllers/product.controller.js";

/* Configure Route */
const router = Router()


/* Add Product Route */
router.post('/',AddProduct);
/* Get Product Route */
router.get('/',GetAllProducts);
/* Delete Product Route */
router.delete('/',(req,res)=>{

});


export default router
