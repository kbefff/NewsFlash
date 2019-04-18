var router = require('express').Router();
var clearAction = require('../../controllers/clear');

router.get('/', clearAction.emptyDB);

module.exports = router;
