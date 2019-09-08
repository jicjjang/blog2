import * as React from 'react';
import Link from 'next/link';

import { GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL, EMAIL, PAGE_URL } from '../../configs/url';

const Sns = () => {
  return (
    <footer className="section-padding--sm footer">
      <Link href={PAGE_URL.ARCHIVE}>
        <a className="footer__link" itemProp="url">
          Archive
        </a>
      </Link>
      <ul className="footer__social">
        <li>
          <a className="fa fa-lg fa-envelope-o" href={`mailto:${EMAIL}`}></a>
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
    </footer>
  );
};

export default Sns;
