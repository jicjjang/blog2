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
