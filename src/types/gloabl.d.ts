// types/express.d.ts
import { JwtPayload } from 'jsonwebtoken'; // Import the JwtPayload type
import { User } from '../models/user.model'; // Replace with your actual User model if you have one

declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload | User; // Adjust the type based on your payload
        }
    }
}