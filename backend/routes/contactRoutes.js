const express = require('express');
const router = express.Router();
const {
  submitContact,
  getContacts,
  markAsRead,
  deleteContact,
} = require('../controllers/contactController');
const adminAuth = require('../middleware/adminAuth');

router.route('/').post(submitContact).get(adminAuth, getContacts);
router.route('/:id/read').put(adminAuth, markAsRead);
router.route('/:id').delete(adminAuth, deleteContact);

module.exports = router;
