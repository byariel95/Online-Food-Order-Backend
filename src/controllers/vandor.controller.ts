import {Request, Response, NextFunction} from 'express';

const createVandor = async (req:Request,res:Response, next:NextFunction)=>{
    res.json({message: 'hello vandor'});
}

export { createVandor};