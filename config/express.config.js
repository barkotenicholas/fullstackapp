import Express from "express";
import dotenv from "dotenv";
import auth from '../routes/auth.route.js';
import product from '../routes/products.route.js'
/* Configure dotenv */
dotenv.config()

/* Configure Express */
const app = Express()

/* Configure BodyParser to express */
app.use(Express.json())

app.use('/auth',auth)

app.use('/product',product)

export default app
