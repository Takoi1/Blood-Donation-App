const express = require('express');
const router = express.Router();
const eventController = require('../Controller/eventController');

router.post('/createEvent', eventController.create);
router.get('/getAllEvents', eventController.readAll);
router.get('/getEvent/:id', eventController.readById);
router.delete('/deleteAllEvents', eventController.deleteAll);
router.delete('/deleteEvent/:id', eventController.deleteById);
router.put('/putEvent/:id', eventController.updateById);

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const eventController = require('../Controller/eventController');

// // Create a new event
// router.post('/events', eventController.create);

// // Get all events
// // router.get('/events', eventController.readAll);
// router.get('/getAllEvents', eventController.readAll);

// // Get event by ID
// router.get('/events/:id', eventController.readById);

// // Get all events of a specific user
// router.get('/events/user/:userId', eventController.readByUserId);

// // Delete all events
// router.delete('/events', eventController.deleteAll);

// // Delete event by ID
// router.delete('/events/:id', eventController.deleteById);

// // Update event by ID
// router.put('/events/:id', eventController.updateById);

// module.exports = router;