import express from 'express';
import authRouter from './routes/auth.js';
const PORT = 3000;
const app = express();
app.use(express.json());
app.use('/', authRouter);
app.listen(PORT, () => { console.log('Server is running on port 3000'); });
