const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    education: { type: String },
    experience: { type: String },
    skills: { type: String },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resume', ResumeSchema);
