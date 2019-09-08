import * as React from 'react';

import ResumeLayout from '../components/layout/ResumeLayout';
import SideBar from '../components/resume/SideBar';
import Introduce from '../components/resume/Introduce';
import Experiences from '../components/resume/Experiences';
import Projects from '../components/resume/Projects';
import Skills from '../components/resume/Skills';
import Others from '../components/resume/Others';
import Footer from '../components/resume/Footer';

import { experienceContents, projectContents, skillContents } from '../contents/resume';

const resume = () => {
  React.useEffect(() => {
    const allLevelBar = document.querySelectorAll('.level-bar-inner');

    allLevelBar.forEach((levelBar: HTMLDivElement) => {
      levelBar.style.width = '0';

      const level = levelBar.getAttribute('data-level');
      const levelBarAnimation = levelBar.animate([{ width: '0' }, { width: level }], 800);

      const finishEvent = () => {
        levelBar.style.width = level;
        levelBar.removeEventListener('finish', finishEvent);
      };
      levelBarAnimation.addEventListener('finish', finishEvent);
    });
  }, []);

  return (
    <ResumeLayout>
      <main>
        <div className="wrapper">
          <SideBar />
          <div className="main-wrapper">
            <Introduce />
            <Experiences experienceContents={experienceContents} />
            <Projects projectContents={projectContents} />
            <Skills skillContents={skillContents} />
            <Others />
          </div>
        </div>
        <Footer />
      </main>
    </ResumeLayout>
  );
};

export default resume;
