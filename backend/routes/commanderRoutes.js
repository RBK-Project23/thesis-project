const express = require('express');
const router = express.Router();
const commanderController = require('../controllers/commanderController');

router.get('/', commanderController.getAllCommanders);
router.get('/:id', commanderController.getCommanderById);
router.post('/', commanderController.RegisterCommander);
router.put('/:id', commanderController.updateCommander);
router.delete('/:id', commanderController.deleteCommander);

module.exports = router;
