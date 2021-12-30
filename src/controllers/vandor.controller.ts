import {Request, Response, NextFunction} from 'express';

const createVandor = async (req:Request,res:Response, next:NextFunction)=>{
    res.json({message: 'create vandor'});
}

const getVandors = async (req:Request,res:Response, next:NextFunction)=>{
    res.json({message: 'get all vandor'});
}

const getVandorByID = async (req:Request,res:Response, next:NextFunction)=>{
    res.json({message: `this is ${req.params.id}`});
}

export { createVandor, getVandorByID, getVandors};