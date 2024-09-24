import { Request, Response } from 'express';
import { User } from '../models/types.js';
import { v4 as uuidv4 } from 'uuid';
import { writeUserToJsonFile } from '../DAL/jsonUsers.js';




export const register = (req:Request, res:Response) => {
    /// register
    try{
        const user: User = req.body;
        user.id = uuidv4();
        writeUserToJsonFile(user);
        res.status(201).send(user);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500).send(e);
    }
}

export const login = (req:Request, res:Response) => {
    /// login
    const userName : string = req.body.userName;
    const password : string = req.body.password;
    res.send(userName + password);
}