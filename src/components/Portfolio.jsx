import React from 'react';
import './styles/Portfolio.css';

const projects = [
    {
      thumbnail: '/images/toolmate-thumbnail.png',
      title: 'toolmate',
      link: 'https://toolmate-43458.web.app/',
      desc: 'A website for a rating, posting and commenting on software tools',
      lang: ['HTML ', 'CSS ', 'JavaScript ', 'React ', 'Firebase'],
    },
    {
      thumbnail: '/images/starwarsprofile-thumbnail.png',
      title: 'starwarsprofile',
      link: 'https://github.com/laurenneoliver/starwarsprofile',
      desc: 'A website for searching for Star Wars characters or to take a fun quiz to determine which Star Wars character you are most like.',
      lang: ['React ', 'Node.js ', 'Express.js'],
    },
    {
      thumbnail: '/images/colmaracademy-thumbnail.png',
      title: 'colmaracademy',
      link: 'https://laurenneoliver.github.io/Colmar-Academy-Website/',
      desc: 'A website for a community college',
      lang: ['HTML ', 'CSS ', 'JavaScript'],
    },
    {
      thumbnail: '/images/healthsnap-thumbnail.png',
      title: 'healthsnap',
      link: 'https://axxesshackathon.web.app',
      desc: 'A website that diagnosis injuries and offers a treatment plan using AI',
      lang: ['HTML ', 'CSS ', 'JavaScript ', 'Gemini ', 'Firebase'],
    },
    {
       thumbnail: '/images/onceuponatime-thumbnail.png',
       title: 'once upon a time',
       link: 'https://laurenneoliver.github.io/Once-Upon-A-Time/',
       desc: 'A website for a wedding venue',
       lang: ['HTML ', 'CSS'],
    },
    {
    thumbnail: '/images/fitnessapp-thumbnail.png',
    title: 'fitness app',
    link: 'https://www.figma.com/proto/U0UTjGBWxM1incg7JEYixi/Part-3---Prototype?node-id=6-970&starting-point-node-id=6%3A970&t=x5iuTP7FkVTZyRFH-1',
    desc: 'A prototype fitness app for effortless workout and diet logging with insights.',
    lang: ['Figma'],
    },
  ];
function Portfolio() {
    return(
        <div>
            <div className="portfolio-heading">
            <img id="portfolio-img" src="/images/portfolio.png" alt="folder" />
            <h3>Portfolio</h3>
            </div>
            <div id="projects-container">
                    {projects.map((project, index) => (
                        <div className="project" key={index}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={project.thumbnail}
                                    alt={`${project.title} thumbnail`}
                                    className="project-thumbnail" />
                                <h3>{project.title}</h3>
                            </a>
                            <p>{project.desc}</p>
                            <div className="languages">
                              {project.lang.map((language, index) => (
                                <span key={index} className="lang-tag">
                                  {language}
                                </span>
                              ))}
                            </div>
                        </div>
                    ))}
            </div>
        </div>

    );

}

export default Portfolio;