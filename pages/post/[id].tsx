import * as React from 'react';
import { NextPageContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import marked from 'marked';

const postDetail: NextPage = ({  }: NextPageContext) => {
  const router = useRouter();
  const markednContents = require(`../../static/post/scale-up-for-security.md`);

  React.useEffect(() => {
    console.log(router);
  }, []);

  return (
    <section
      className="section-padding post markdown-body"
      itemProp="articleBody"
      dangerouslySetInnerHTML={{ __html: marked(markednContents) }}
    />
  );
};

export default postDetail;
