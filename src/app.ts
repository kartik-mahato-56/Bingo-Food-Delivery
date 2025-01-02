import express, { Application, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import createError from 'http-errors';
/** Import MongoDB connection */
import './config/db';
/** Import API Routes */
import apiRoutes from './routes';
const app: Application = express();

/** enable cors using cors middleware */
app.use(cors());
/**Enable morgan logger for api logging */
app.use(morgan('dev'));
/**Enable express body parser to accept request body data */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Set static path for file rendering */
app.use(express.static(path.join(__dirname, 'public')));

/** Set default view engine */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req: Request, res: Response) => {
    res.render('index');
});
/** API Routes seeding */
app.use('/api/v1', apiRoutes);
// Handle 404 errors
app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(404));
});
// General error handler for API responses
/* tslint:disable:no-unused-variable */
app.use((err: any, req: Request, res: Response, _next: NextFunction): void => {
    console.log(err);
    const status = err?.status || 500;
    res.status(status).json({
        success: false,
        statusCode: status,
        message: (err as Error).message || 'Internal Server Error',
    });
});
export default app;
