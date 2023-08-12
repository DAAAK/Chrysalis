import mongoose from 'mongoose';
import env from './env';

const initDatabase = async () => {
  mongoose.set('strictQuery', false);

  mongoose.connect(env.MONGODB_URI);
  const db = mongoose.connection;
  db.on('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose.');
  });
};

export default initDatabase;
