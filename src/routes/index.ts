import { Router } from 'express';
import adminRouter from './admin.routes';
import vendorRouter from './vendor.routes';
import customerRouter from './customer.routes';
const router: Router = Router();

router.use('/admin', adminRouter);
router.use('/vendor', vendorRouter);
router.use('/customer', customerRouter);

export default router;
