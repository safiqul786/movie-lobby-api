import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import movieRoutes from './routes/movieRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', movieRoutes);

app.listen(3000, () => {
  mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB', error));

  console.log("app is running on port: 3000");
})

