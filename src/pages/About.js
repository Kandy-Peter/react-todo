import React from 'react';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div className='abt_container'>
            <Navigation />
            <div className='about-me'>
                <h2>About</h2>
                <p>The TodoList is a simple web application that help users to manage their tasks,
                    the way that user can create a new task, can edit and save it again, user can check it as completed
                    or delete the tasks.<br/>
                    All tasks are stored locally using localStorage.<br/>
                    It's created using React(components, Hooks, Router) and SASS.
                </p>

                <h3>For Contact and see more projects:</h3>
                <ul>
                    <li><a href='https://github.com/Kandy-Peter/'>Github</a></li>
                    <li><a href='https://www.linkedin.com/in/kandi-peter-a49590212/'>Linkedin</a></li>
                    <li><a href='https://twitter.com/peter_kandy'>Twitter</a></li>  
                    <li><a href='mailto:kandypeter03@gmail.com'>kandypeter03@gmail.com</a></li>
                </ul>
            </div>
        </div>
    );
};

export default About;