import * as React from 'react';
import Link from 'next/link';

import { IPost } from '../../contents/posts';
import Post from './Post';
import Sns from './Sns';
import { TAB_FLAG } from '../../pages';
import { urlWithVariable, PAGE_URL } from '../../configs/url';

interface IProps {
  page: number;
  categoryName: string;
  hasPrevious: () => boolean;
  hasNext: () => boolean;
  tabFlag: TAB_FLAG;
  filteredPosts: IPost[];
  setLoaded: (loaded: boolean) => void;
  setPreviewIndex: (page: number) => void;
}

const Posts = ({
  page,
  categoryName,
  hasPrevious,
  hasNext,
  tabFlag,
  filteredPosts,
  setLoaded,
  setPreviewIndex
}: IProps) => {
  return (
    <div className={`tab ${tabFlag === TAB_FLAG.POST ? 'active' : ''}`}>
      <ul itemScope={true} itemType="http://schema.org/Blog">
        {filteredPosts.map((post: IPost, index: number) => (
          <Post key={post.id} index={index} post={post} setPreviewIndex={setPreviewIndex} />
        ))}
      </ul>

      <div className="pagination">
        {hasPrevious() && (
          <Link href={urlWithVariable(PAGE_URL.HOME, null, { page: page - 1, categoryName })}>
            <a onClick={() => setLoaded(false)}>Previous</a>
          </Link>
        )}
        {hasNext() && (
          <Link href={urlWithVariable(PAGE_URL.HOME, null, { page: page + 1, categoryName })}>
            <a onClick={() => setLoaded(false)}>Next</a>
          </Link>
        )}
      </div>

      <Sns />
    </div>
  );
};

export default Posts;
