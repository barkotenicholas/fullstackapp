import app from "./config/express.config.js";
import dotenv from "dotenv";

/* Configure dotenv */
dotenv.config()

/* Start server*/ 
app.listen(process.env.PORT || 4000,()=>{
    console.info(`Server started at port ${process.env.PORT}`)
})