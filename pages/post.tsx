import * as React from 'react';
import { NextPageContext, NextPage } from 'next';
import Error from 'next/error';
import { observer } from 'mobx-react';
import marked from 'marked';

import PostsLayout from '../components/layout/PostsLayout';
import stores from '../store';

interface IProps extends NextPageContext {
  env: string;
  postId: string;
  errorStatusCode: number;
}

const { postsStore } = stores;

const postDetail: NextPage = ({ env, postId, errorStatusCode }: IProps) => {
  React.useEffect(() => {
    // marked에서 안먹혀서 따로 설정
    document.querySelectorAll('pre > code').forEach((block: Element) => {
      hljs.highlightBlock(block);
    });
  }, []);

  return errorStatusCode ? (
    <Error statusCode={errorStatusCode} />
  ) : (
    <PostsLayout env={env} postData={postsStore.getItem(postId)} nextPostData={postsStore.getNextItem(postId)}>
      <section
        className="section-padding post markdown-body"
        itemProp="articleBody"
        dangerouslySetInnerHTML={{ __html: marked(require(`../static/post/${postId}.md`)) }}
      />
    </PostsLayout>
  );
};

postDetail.getInitialProps = async ({ res, query }: NextPageContext) => {
  let errorStatusCode = undefined;

  if (!query || !query.id) {
    res.statusCode = 404;
    errorStatusCode = 404;
  }

  if (!postsStore.getItem(query.id as string)) {
    errorStatusCode = 404;
  }

  return {
    env: process.env.NODE_ENV,
    postId: query.id || '',
    errorStatusCode
  };
};

export default observer(postDetail);
