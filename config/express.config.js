import Express from "express";
import dotenv from "dotenv";

/* Configure dotenv */
dotenv.config()

/* Configure Express */
const app = Express()

/* Configure BodyParser to express */

app.use(Express.json())



export default app
