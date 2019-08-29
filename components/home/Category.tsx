import * as React from 'react';

import { ICategory } from '../../contents/categories';

interface IProps {
  category: ICategory;
}

const Category = ({ category }: IProps) => {
  return (
    <li className="card">
      <a className="card__link" href={`/category/${category.title.toLowerCase()}`}>
        <div className="card__img">
          <figure
            className="absolute-bg"
            style={{
              backgroundImage: `url(/${category.image})`
            }}
          />
        </div>
        <div className="card__container">
          <h2 className="card__header">{category.title}</h2>
          <p className="card__count"></p>
          <span className="card__more">View All</span>
        </div>
      </a>
    </li>
  );
};

export default Category;
