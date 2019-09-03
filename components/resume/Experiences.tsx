import * as React from 'react';

import { IResumeExperience } from '../../contents/resume';

interface IProps {
  experienceContents: IResumeExperience[];
}

const Experience = ({ title, when, company, usecase, details }: IResumeExperience) => {
  return (
    <div className="item">
      <div className="meta">
        <div className="upper-row">
          <h3 className="job-title">{title}</h3>
          <div className="time">{when}</div>
        </div>
        <div className="company">{company}</div>
      </div>
      <div className="details">
        <p>usecase: {usecase}</p>
        {details && <p dangerouslySetInnerHTML={{ __html: details }} />}
      </div>
    </div>
  );
};

const Experiences = ({ experienceContents }: IProps) => {
  return (
    <section className="section experiences-section">
      <h2 className="section-title">
        <i className="fa fa-briefcase"></i>Experiences
      </h2>

      {experienceContents.map((experience: IResumeExperience) => (
        <Experience {...experience} key={experience.company} />
      ))}
    </section>
  );
};

export default Experiences;
