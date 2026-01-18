import express from 'express';
import userRoutes from './routes/user.route.js';
import taskRoutes from './routes/task.route.js';
import { errorHandler } from './middlewares/error.middleware.js';
import cookieParser from "cookie-parser";
import cors from 'cors';


const app = express();
//checking 

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:     process.env.Fronetend_URL,
  credentials: true, 
}));
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
// app.use('/api/auth', authRoutes);


app.use(errorHandler);
export default app;
