import * as React from 'react';
import Link from 'next/link';

import { IPost } from '../../contents/posts';

interface IProps {
  post: IPost;
  index: number;
  setPreviewIndex: (page: number) => void;
}

const Post = ({ post, index = 0, setPreviewIndex }: IProps) => {
  const postDate = (date: string) => {
    const postDate = new Date(date);
    return `${postDate.getMonth() + 1} ${postDate.getDate()}, ${postDate.getFullYear()}`;
  };

  return (
    <li
      className="preview"
      itemProp="blogPost"
      itemScope={true}
      itemType="http://schema.org/BlogPosting"
      onMouseEnter={() => setPreviewIndex(index)}>
      <Link href={post.path}>
        <a className="preview__link" itemProp="url">
          <span className="preview__date" itemProp="datePublished">
            {postDate(post.date)}
          </span>
          <h2 className="preview__header" itemProp="name">
            {post.title}
          </h2>
          <p className="preview__excerpt" itemProp="description">
            {post.description}
          </p>
          <span className="preview__more">Read More</span>
        </a>
      </Link>
    </li>
  );
};

export default Post;
