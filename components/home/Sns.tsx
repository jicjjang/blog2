import * as React from 'react';

const Sns = () => {
  return (
    <footer className="section-padding--sm footer">
      <a className="footer__link" href="/archive" itemProp="url">
        Archive
      </a>
      <ul className="footer__social">
        <li>
          <a className="fa fa-lg fa-envelope-o" href="mailto:jicjjang12@gmail.com"></a>
        </li>
        <li>
          <a className="fa fa-lg fa-github" href="https://github.com/jicjjang" target="_blank"></a>
        </li>
        <li>
          <a className="fa fa-lg fa-linkedin" href="https://www.linkedin.com/in/jicjjang" target="_blank"></a>
        </li>
        <li>
          <a className="fa fa-lg fa-instagram" href="https://instagram.com/jicjjang12" target="_blank"></a>
        </li>
      </ul>
    </footer>
  );
};

export default Sns;
