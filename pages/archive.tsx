import * as React from 'react';

import DefaultLayout from '../components/layout/DefaultLayout';
import postContents, { IPost } from '../contents/posts';
import Post from '../components/archive/Post';
import BackToPosts from '../components/common/BackToPosts';

const archive = () => {
  return (
    <DefaultLayout>
      <section className="archives" itemScope={true} itemType="http://schema.org/Blog">
        <BackToPosts color="black" />
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
