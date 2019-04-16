var router = require('express').Router();
var noteAction = require('../../controllers/note');

router.get('/:id', noteAction.find);
router.post('/', noteAction.create);
router.delete('/:id', noteAction.delete);

modules.exports = router;
