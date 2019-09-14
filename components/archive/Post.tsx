import * as React from 'react';
import Link from 'next/link';

import { IPost } from '../../store/PostsStore';

interface IProps {
  post: IPost;
  env: string;
}

const Post = ({ post, env }: IProps) => {
  const postDate = (date: string) => {
    const postDate = new Date(date);
    return `${postDate.getMonth() + 1} ${postDate.getDate()}, ${postDate.getFullYear()}`;
  };

  return (
    <article className="card" itemProp="blogPost" itemScope={true} itemType="http://schema.org/BlogPosting">
      <Link
        href={env === 'development' && post.layout === 'post' ? `/post?id=${post.path.split('/post/')[1]}` : post.path}
        as={post.path}>
        <a className="card__link" itemProp="url">
          <div className="card__img">
            <figure className="absolute-bg wow" style={{ backgroundImage: `url(${post.image})` }} />
          </div>
          <div className="card__container">
            <h2 className="card__header" itemProp="name">
              {post.title}
            </h2>
            <p className="card__count" itemProp="datePublished">{`${postDate(post.date)} in ${post.category}`}</p>
            <span className="card__more">Read Post</span>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default Post;
