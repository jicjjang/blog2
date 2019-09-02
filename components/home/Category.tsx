import * as React from 'react';

import Link from 'next/link';

import { PAGE_URL, urlWithVariable } from '../../configs/url';
import { ICategory } from '../../contents/categories';
import { TAB_FLAG } from '../../pages';

interface IProps {
  category: ICategory;
  setTabFlag: (tabFlag: TAB_FLAG) => void;
}

const Category = ({ category, setTabFlag }: IProps) => {
  const categoryName = category.title.toLowerCase();
  return (
    <li className="card">
      <Link href={urlWithVariable(PAGE_URL.HOME, null, { categoryName })}>
        <a className="card__link" onClick={() => setTabFlag(TAB_FLAG.POST)}>
          <div className="card__img">
            <figure
              className="absolute-bg"
              style={{
                backgroundImage: `url(${category.image})`
              }}
            />
          </div>
          <div className="card__container">
            <h2 className="card__header">{category.title}</h2>
            <p className="card__count"></p>
            <span className="card__more">View All</span>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Category;
