import * as React from 'react';

import { EMAIL, GITHUB_URL, baseUrl } from '../../configs/url';

const SideBar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="profile-container">
        <img
          className="profile"
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '80px',
            background: 'url(/static/resume/image/profile.jpg) 0px 0px / 160px 212px no-repeat'
          }}
        />
        <h1 className="name">최준석</h1>
        <h3 className="tagline">
          백엔드를 좋아하는
          <br />
          프론트 개발자
        </h3>
      </div>

      <div className="contact-container container-block">
        <ul className="list-unstyled contact-list">
          <li className="email">
            <i className="fa fa-envelope"></i>
            <a href={`mailto: ${EMAIL}`}>{EMAIL}</a>
          </li>
          <li className="website">
            <i className="fa fa-globe"></i>
            <a href={baseUrl} target="_blank">
              {baseUrl}
            </a>
          </li>
          <li className="github">
            <i className="fa fa-github"></i>
            <a href={GITHUB_URL} target="_blank">
              github.com/jicjjang
            </a>
          </li>
        </ul>
      </div>

      <div className="education-container container-block">
        <h2 className="container-block-title">Education</h2>
        <div className="item">
          <h4 className="degree">인천 대건고등학교</h4>
          <h5 className="meta">졸업</h5>
          <div className="time">2007 - 2010</div>
        </div>
        <div className="item">
          <h4 className="degree">한성대학교</h4>
          <h5 className="meta">졸업</h5>
          <h5 className="meta">컴퓨터 공학과</h5>
          <div className="time">2010 - 2017.2</div>
        </div>
      </div>

      <div className="interests-container container-block">
        <h2 className="container-block-title">Interests</h2>
        <ul className="list-unstyled interests-list">
          <li>Toy projects</li>
          <li>Sports</li>
          <li>Travel</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
