import * as React from 'react';

import Category from './Category';
import { ICategory } from '../../contents/categories';
import Sns from './Sns';
import { TAB_FLAG } from '../../pages';

interface IProps {
  store: {
    categories: ICategory[];
  };
  tabFlag: TAB_FLAG;
  setTabFlag: (tabFlag: TAB_FLAG) => void;
}

const Categories = ({ store, tabFlag, setTabFlag }: IProps) => {
  return (
    <div className={`tab ${tabFlag === TAB_FLAG.CATEGORY ? 'active' : ''}`}>
      <ul className="cards">
        {(store.categories || []).map((category: ICategory) => (
          <Category key={category.title} category={category} setTabFlag={setTabFlag} />
        ))}
      </ul>

      <Sns />
    </div>
  );
};

export default Categories;
