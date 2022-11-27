import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const veriftToken = async(req,res,next)=>{

    const token = req.headers['x-access-token']

    if(!token) return res.status(200).json({auth:false,message:'please provide token'});

    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        
        if(err) return res.status(200).json({auth:false,message:err.message});

        next();

    })

}