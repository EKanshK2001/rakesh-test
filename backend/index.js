import express from 'express';
import cors from 'cors'
import authRoute from './routes/authRoute.js';
import userRoute from './routes/userRoute.js'
import errorHandler from './middlewares/errorHandler.js';

const app = express();


app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use(errorHandler)

app.listen(3000, () => {console.log('api is started on port 3000');})