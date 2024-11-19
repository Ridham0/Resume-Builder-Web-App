const express = require('express');
const router = express.Router();
const { createResume, getAllResumes } = require('../controllers/resumeController');

// Route to create a new resume
router.post('/', createResume);

// Route to get all resumes
router.get('/', getAllResumes);

module.exports = router;
