import Express from "express";
import dotenv from "dotenv";
import auth from '../routes/auth.route.js';
/* Configure dotenv */
dotenv.config()

/* Configure Express */
const app = Express()

/* Configure BodyParser to express */
app.use(Express.json())

app.use('/auth',auth)

export default app
