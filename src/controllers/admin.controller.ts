import {Request, Response, NextFunction} from 'express';

const createAdmin = async (req:Request,res:Response, next:NextFunction)=>{
    res.json({message: 'hello admin'});
}

export { createAdmin};