var router = require('express').Router;
var fetchRoutes = require('/fetch');
var headlineRoutes = require('/headline');
var noteRoutes = require('/note');
var clearRoutes = require('/clear');

router.use('/fetch', fetchRoutes);
router.use('/headline', headlineRoutes);
router.use('/note', noteRoutes);
router.use('/clear', clearRoutes);

module.exports = router;