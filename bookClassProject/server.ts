import express, { Application } from 'express';
import authRouter from './routes/auth.js';
const PORT: number = 3000;

const app: Application = express();


app.use(express.json());

app.use('/', authRouter);


app.listen(PORT, () => {console.log('Server is running on port 3000');})