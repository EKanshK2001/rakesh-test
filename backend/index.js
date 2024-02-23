import express from 'express';
import cors from 'cors'
import authRoute from './routes/authRoute.js';
import userRoute from './routes/userRoute.js'
import errorMiddleware from './middlewares/errorMiddleware.js';

const app = express();


app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use(errorMiddleware)

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`api is started on port ${PORT}`);
})