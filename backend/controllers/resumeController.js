const Resume = require('../models/Resume');

// Create a new resume
exports.createResume = async (req, res) => {
    const { name, email, phone, education, experience, skills } = req.body;
    try {
        const newResume = new Resume({ name, email, phone, education, experience, skills });
        await newResume.save();
        res.status(201).json({ message: 'Resume created successfully!', resume: newResume });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get all resumes
exports.getAllResumes = async (req, res) => {
    try {
        const resumes = await Resume.find();
        res.status(200).json(resumes);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
