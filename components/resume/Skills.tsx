import * as React from 'react';

import { IResumeSkill } from '../../contents/resume';

interface IProps {
  skillContents: IResumeSkill[];
}

const Skill = ({ title, level }: IResumeSkill) => {
  return (
    <div className="item">
      <h3 className="level-title">{title}</h3>
      <div className="level-bar">
        <div className="level-bar-inner" data-level={`${level}%`} style={{ width: 0 }}></div>
      </div>
    </div>
  );
};

const Skills = ({ skillContents }: IProps) => {
  return (
    <section className="skills-section section">
      <h2 className="section-title">
        <i className="fa fa-rocket"></i>Skills &amp; Proficiency
      </h2>
      <div className="skillset">
        {skillContents.map((skill: IResumeSkill) => (
          <Skill {...skill} key={skill.title} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
