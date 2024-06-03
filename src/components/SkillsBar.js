import React from 'react';

const SkillsBar = ({ skill, width }) => (
  <div className="skills-bar">
    <div style={{ width: `${width}%` }}>{skill}</div>
  </div>
);

export default SkillsBar;