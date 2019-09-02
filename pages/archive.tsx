import * as React from 'react';
import Link from 'next/link';

import DefaultLayout from '../components/layout/DefaultLayout';
import postContents, { IPost } from '../contents/posts';
import { PAGE_URL } from '../configs/url';
import Post from '../components/archive/Post';

const archive = () => {
  return (
    <DefaultLayout>
      <section className="archives" itemScope={true} itemType="http://schema.org/Blog">
        <Link href={PAGE_URL.HOME}>
          <a className="nav nav--black">
            <i className="fa fa-lg fa-arrow-left"></i>
            <span>Back to Posts</span>
          </a>
        </Link>
        <header className="archives__header">
          <span>Archive</span>
        </header>
        <div className="section-padding archives__container">
          {postContents.map((post: IPost) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
};

export default archive;
