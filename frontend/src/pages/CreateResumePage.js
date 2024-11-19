import React, { useState } from 'react';
import axios from 'axios';

function CreateResumePage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        education: '',
        experience: '',
        skills: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/resumes', formData);
            alert('Resume Created Successfully!');
        } catch (error) {
            console.error(error);
            alert('Error creating resume.');
        }
    };

    return (
        <div>
            <h2>Create Your Resume</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
                <textarea name="education" placeholder="Education" onChange={handleChange}></textarea>
                <textarea name="experience" placeholder="Experience" onChange={handleChange}></textarea>
                <textarea name="skills" placeholder="Skills" onChange={handleChange}></textarea>
                <button type="submit">Create Resume</button>
            </form>
        </div>
    );
}

export default CreateResumePage;
