import jsonfile from 'jsonfile';
import {User} from '../models/types';
import { error, log } from 'console';

export const writeUserToJsonFile = (user: User) =>{
    jsonfile.readFile('./data/db.json')
    .then(users => {
        users.push(user);
        jsonfile.writeFile('./data/db.json', user, function (err) {
            if (err) {
                console.error(err);
            }
    })
    
    })
    .catch(error => console.error(error));
}