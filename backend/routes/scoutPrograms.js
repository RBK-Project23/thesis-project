const express = require('express');
const router = express.Router();
const scoutProgramController = require('../controllers/scoutProgramsController');

router.get('/', scoutProgramController.getScoutPrograms);
router.post('/', scoutProgramController.createScoutProgram);
router.get('/:id', scoutProgramController.getScoutProgram);
router.patch('/:id', scoutProgramController.updateScoutProgram);
router.delete('/:id', scoutProgramController.deleteScoutProgram);

module.exports = router;
