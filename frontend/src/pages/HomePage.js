import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Welcome to the Resume Builder</h1>
            <Link to="/create-resume">Create Your Resume</Link>
        </div>
    );
}

export default HomePage;
