import React from 'react';
import './styles/Skills.css';

const skills = [
  { name: 'HTML', icon: '/images/HTML-icon.png' },
  { name: 'CSS', icon: '/images/CSS-icon.png' },
  { name: 'JavaScript', icon: '/images/JS-icon.png' },
  { name: 'React.js', icon: '/images/React-icon.png' },
  { name: 'Python', icon: '/images/python-icon.png' },
  { name: 'SQL', icon: '/images/SQL-icon.png' },
  { name: 'Git', icon: '/images/Git-icon.png' },
  { name: 'GitHub', icon: '/images/github-icon.png' },
];

const Skills = () => {
  return (
    <div>
      <div className="skills-heading">
        <img id="computer" src="/images/computer_white.png" alt="Computer" />
        <h3>Skills & Abilities</h3>
      </div>
      <div id="skills-container">
        {skills.map((skill, index) => (
          <div className="skills" key={index}>
            <img src={skill.icon} alt={`${skill.name} icon`} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
