import mongoose from 'mongoose';
import config from './config';

// Self-executing function to connect to MongoDB
(async () => {
    const dbURI: string = config.MongoDB_URL as string;
    mongoose.set('strictQuery', false);
    try {
        await mongoose.connect(dbURI, {});
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
    }
})();
