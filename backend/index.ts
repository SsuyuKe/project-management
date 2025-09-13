import 'dotenv/config';
import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import cookieSession from 'cookie-session';
import { config } from './config/app.config';
// import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session
app.use(
  cookieSession({
    name: 'cookieSession',
    keys: [config.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000,
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax',
  })
);

// Middleware
app.use(
  cors({
    origin: config.FRONTEND_ORIGIN,
    credentials: true,
  })
);

// MongoDB 連接
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/your-db')
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((error) => console.error('MongoDB connection error:', error));

// 基本路由
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: 'Hello TypeScript Backend!' });
});

// 啟動伺服器
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT} in ${config.NODE_ENV}`);
});
