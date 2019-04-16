var router = require('express').Router();
var fetchAction = require('../../controllers/fetch');

router.get('/', fetchAction.extractTitles);

modules.exports = router;
