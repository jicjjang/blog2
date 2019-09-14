import * as React from 'react';
import { NextPageContext } from 'next';

import DefaultLayout from '../components/layout/DefaultLayout';
import postContents, { IPost } from '../contents/posts';
import Post from '../components/archive/Post';
import BackToPosts from '../components/common/BackToPosts';

interface IProps extends NextPageContext {
  env: string;
}

const archive = ({ env }: IProps) => {
  return (
    <DefaultLayout>
      <section className="archives" itemScope={true} itemType="http://schema.org/Blog">
        <BackToPosts color="black" />
        <header className="archives__header">
          <span>Archive</span>
        </header>
        <div className="section-padding archives__container">
          {postContents.map((post: IPost) => (
            <Post post={post} env={env} key={post.id} />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
};

archive.getInitialProps = async ({  }: NextPageContext) => {
  return {
    env: process.env.NODE_ENV
  };
};

export default archive;
