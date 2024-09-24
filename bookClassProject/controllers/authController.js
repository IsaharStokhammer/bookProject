import { v4 as uuidv4 } from 'uuid';
import { writeUserToJsonFile } from '../DAL/jsonUser.js';
export const register = (req, res) => {
    /// register
    try {
        const user = req.body;
        user.id = uuidv4();
        writeUserToJsonFile(user);
        res.status(201).send(user);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500).send(e);
    }
};
export const login = (req, res) => {
    /// login
    const userName = req.body.userName;
    const password = req.body.password;
    res.send(userName + password);
};
