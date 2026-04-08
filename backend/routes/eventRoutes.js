const express = require('express');
const router = express.Router();
const {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/eventController');
const adminAuth = require('../middleware/adminAuth');

router.route('/').get(getEvents).post(adminAuth, createEvent);
router.route('/:id').get(getEvent).put(adminAuth, updateEvent).delete(adminAuth, deleteEvent);

module.exports = router;
