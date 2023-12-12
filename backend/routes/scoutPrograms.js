const express = require('express');
const router = express.Router();
const scoutProgramsController = require('../controllers/scoutProgramsController');

router.get('/', scoutProgramsController.getScoutPrograms);
router.post('/', scoutProgramsController.createScoutProgram);


module.exports = router;
