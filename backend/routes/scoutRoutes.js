const express = require('express');
const router = express.Router();
const scoutController = require('../controllers/scoutController');

router.get('/', scoutController.getAllScouts);
router.get('/:id', scoutController.getScoutById);
router.post('/', scoutController.RegisterScout);
router.put('/:id', scoutController.updateScout);
router.delete('/:id', scoutController.deleteScout);

module.exports = router;