import * as React from 'react';

import { IPost } from '../../contents/posts';

interface IProps {
  post: IPost;
  index: number;
  setPreviewIndex: (previewIndex: number) => void;
}

const Post = ({ post, setPreviewIndex, index }: IProps) => {
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
      onMouseUp={() => setPreviewIndex(index)}>
      <a className="preview__link" href={post.path} itemProp="url">
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
    </li>
  );
};

export default Post;
