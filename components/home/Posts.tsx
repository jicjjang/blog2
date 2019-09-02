import * as React from 'react';
import Link from 'next/link';

import { IPost } from '../../contents/posts';
import Post from './Post';
import Sns from './Sns';
import { TAB_FLAG } from '../../pages';
import { urlWithVariable, PAGE_URL } from '../../configs/url';

interface IProps {
  store: {
    page: number;
    categoryName: string;
    filteredPostList: IPost[];
    hasPrevious: boolean;
    hasNext: boolean;
    setPreviewIndex: (page: number) => void;
  };
  tabFlag: TAB_FLAG;
  setloaded: (loaded: boolean) => void;
}

const Posts = ({ store, tabFlag, setloaded }: IProps) => {
  return (
    <div className={`tab ${tabFlag === TAB_FLAG.POST ? 'active' : ''}`}>
      <ul itemScope={true} itemType="http://schema.org/Blog">
        {(store.filteredPostList || []).map((post: IPost, index: number) => (
          <Post key={post.id} index={index} post={post} setPreviewIndex={store.setPreviewIndex} />
        ))}
      </ul>

      <div className="pagination">
        {store.hasPrevious && (
          <Link href={urlWithVariable(PAGE_URL.HOME, null, { page: store.page - 1, categoryName: store.categoryName })}>
            <a onClick={() => setloaded(false)}>Previous</a>
          </Link>
        )}
        {store.hasNext && (
          <Link href={urlWithVariable(PAGE_URL.HOME, null, { page: store.page + 1, categoryName: store.categoryName })}>
            <a onClick={() => setloaded(false)}>Next</a>
          </Link>
        )}
      </div>

      <Sns />
    </div>
  );
};

export default Posts;
