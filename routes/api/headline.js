var router = require('express').Router();
var headlineAction = require('../../controllers/headline');

router.get('/', headlineAction.findAll);
router.delete('/:id', headlineAction.delete);
router.put('/:id', headlineAction.update);

module.exports = router;
