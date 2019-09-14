import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { baseUrl } from '../../configs/url';
import { IPost } from '../../store/PostsStore';
import BackToPosts from '../common/BackToPosts';
import Profile from '../post/Profile';

interface IProps {
  env: string;
  postData: IPost;
  nextPostData?: IPost;
}

const PostsLayout = ({ env, postData, nextPostData, children }: React.PropsWithChildren<IProps>) => {
  React.useEffect(() => {
    var d = document,
      s = d.createElement('script');
    s.src = 'https://jicjjang.disqus.com/embed.js';
    s.setAttribute('data-timestamp', `${+new Date()}`);
    (d.head || d.body).appendChild(s);
  }, []);

  const postDate = (date: string) => {
    const postDate = new Date(date);
    return `${postDate.getMonth() + 1} / ${postDate.getDate()}, ${postDate.getFullYear()}`;
  };

  return (
    <>
      <Head>
        <title>{postData.title} - June blog</title>
        <meta name="og:title" content={postData.title || 'June'} />
        <meta name="og:url" content={`${baseUrl}${postData.path}`} />
        <meta name="og:site_name" content={postData.title || 'June'} />
        <meta name="og:description" content={postData.description || "June's blog"} />
        <meta name="og:image" content={`${baseUrl}${postData.image}` || '/static/image/mine.jpg'} />
        <meta name="twitter:description" content={postData.description || "June's blog"} />
        <meta name="twitter:title" content={postData.title || 'June'} />
        <meta name="twitter:url" content={`${baseUrl}${postData.path}`} />
        <meta name="twitter:site" content={`${baseUrl}${postData.path}`} />
        <meta name="twitter:domain" content={`${baseUrl}${postData.path}`} />
        <meta name="twitter:image" content={`${baseUrl}${postData.image}` || '/static/image/mine.jpg'} />
      </Head>

      <main>
        <article itemProp="blogPost" itemScope={true} itemType="http://schema.org/BlogPosting">
          <header className="section-padding--lg mast">
            <BackToPosts />
            <figure className="absolute-bg mast__img" style={{ backgroundImage: `url(${postData.image})` }} />
            <div className="mast__container">
              <span>
                <time itemProp="datePublished">{postDate(postData.date)}</time>
              </span>
              <h1 itemProp="name headline">{postData.title}</h1>
              <span>Posted in {postData.category}</span>
            </div>
          </header>

          {children}

          <Profile />
        </article>

        {nextPostData && (
          <section className="next">
            <Link
              href={
                env === 'development' && nextPostData.layout === 'post'
                  ? `/post?id=${nextPostData.path.split('/post/')[1]}`
                  : nextPostData.path
              }
              as={nextPostData.path}>
              <a className="next__link" itemProp="url" style={{ backgroundImage: `url(${nextPostData.image})` }}>
                <div className="next__container">
                  <span>Read Next</span>
                  <h2>{nextPostData.title}</h2>
                </div>
              </a>
            </Link>
          </section>
        )}

        <div id="disqus_thread" style={{ margin: '50px 10% 0 10%' }} />
      </main>
    </>
  );
};

export default PostsLayout;
