const express = require('express');

const router = express.Router();

const bloodDonatorController = require('../Controller/bloodController');

router.post('/createBlood', bloodDonatorController.create);
router.get('/readAll', bloodDonatorController.read);
router.put('/putgetBlood/:id', bloodDonatorController.update);
router.delete('/deleteBlood/:id', bloodDonatorController.delete);

module.exports = router;