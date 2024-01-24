import React from 'react';
import './About.css';
import profile from '../../images/111.png';
const About = () => {
    return (
        <div className='text-center mt-5'>
            <div className="profile">
                <img src={profile} alt="" />
            </div>
            <h3 className='text-center'>Tajimul Hasan</h3>
            <div className="paragraph">
                <p>I am Tajimul Hasan from the University of Rajshahi. I have learned Hypertext Markup Language, Cascading Style Sheets, Javascript, and React JS (which is a library of JS). I have also learned Bootstrap and Tailwind CSS (CSS framworks). I am confidently prepared to develop a simple portfolio site for you.</p>
            </div>
        </div>
    );
};

export default About;