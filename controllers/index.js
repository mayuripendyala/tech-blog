const router = require('express').Router();

const dashboardRoutes = require('./dashboardRoutes.js');
const homeRoutes = require('./homeRoutes.js');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('./dashboard',dashboardRoutes);


module.exports = router;