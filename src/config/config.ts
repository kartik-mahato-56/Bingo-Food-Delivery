import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default {
    serverConfig: {
        nodeEnv: process.env.NODE_ENV || 'Local',
        port: process.env.PORT || 4500,
        baseUrl: process.env.BASE_URL,
        sslKey: process.env.SSL_KEY_PATH,
        sslCert: process.env.SSL_CERT_PATH,
        fileUrl: process.env.FILE_BASE_URL,
    },
    MongoDB_URL: process.env.MONGODB_URI,
    jwtConfig: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN || '2d',
    },
    emailConfig: {
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT as string),
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        from: process.env.MAIL_FROM,
    },
};
