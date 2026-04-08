const express = require('express');
const router = express.Router();
const {
  getTeamMembers,
  getTeamMember,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} = require('../controllers/teamController');
const adminAuth = require('../middleware/adminAuth');

router.route('/').get(getTeamMembers).post(adminAuth, createTeamMember);
router.route('/:id').get(getTeamMember).put(adminAuth, updateTeamMember).delete(adminAuth, deleteTeamMember);

module.exports = router;
