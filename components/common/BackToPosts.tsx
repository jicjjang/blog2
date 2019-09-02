import * as React from 'react';
import Link from 'next/link';

import { PAGE_URL } from '../../configs/url';

interface IProps {
  color?: string;
  clickEvent?: () => void;
}

const BacktPosts = ({ color = 'white', clickEvent }: IProps) => {
  return (
    <Link href={PAGE_URL.HOME}>
      <a className={`nav nav--${color}`} itemProp="url" onClick={() => clickEvent && clickEvent()}>
        <i className="fa fa-lg fa-arrow-left"></i>
        <span>Back to Posts</span>
      </a>
    </Link>
  );
};

export default BacktPosts;
