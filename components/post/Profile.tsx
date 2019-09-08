import * as React from 'react';

import { GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL } from '../../configs/url';

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile__card">
        <div className="profile__img">
          <figure className="absolute-bg" style={{ backgroundImage: `url(/static/image/mine.jpg)` }} />
        </div>
        <div className="profile__container">
          <p>
            프론트 개발을 좋아하고 꾸준히 공부하는 백엔드 개발자. 새로운 기술에 관심이 많음. React + Vue 개발 진행중.
            현재 Kakaopay 재직중.
          </p>
          <ul className="profile__social">
            <li>
              <a className="fa fa-lg fa-envelope-o" href="mailto:jicjjang12@gmail.com"></a>
            </li>
            <li>
              <a className="fa fa-lg fa-github" href={GITHUB_URL} target="_blank"></a>
            </li>
            <li>
              <a className="fa fa-lg fa-linkedin" href={LINKEDIN_URL} target="_blank"></a>
            </li>
            <li>
              <a className="fa fa-lg fa-instagram" href={INSTAGRAM_URL} target="_blank"></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
