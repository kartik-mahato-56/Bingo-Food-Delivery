import app from './app';
import http from 'http';
import https from 'https';
import fs from 'fs';
import config from './config/config';

/** Application PORT */
const PORT: number = config.serverConfig.port as number;
if (['Development', 'Production'].includes(config.serverConfig.nodeEnv)) {
    const sslOptoon: object = {
        key: fs.readFileSync(config.serverConfig.sslKey as string),
        cert: fs.readFileSync(config.serverConfig.sslCert as string),
    };
    https.createServer(sslOptoon, app).listen(PORT, () => {
        console.log(`HTTPS Server is running on PORT::${PORT}`);
    });
} else {
    http.createServer(app).listen(PORT, () => {
        console.log(`HTTP Server is running one PORT:::${PORT}`);
    });
}
