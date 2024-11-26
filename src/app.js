import cors from 'cors';
import express from 'express';
import adminRoutes from './routes/admin.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);    

export { app };
