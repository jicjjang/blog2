import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import Metas from '../components/common/Metas';

interface IProps {
  isProduction: boolean;
}

export default class extends Document<IProps> {
  static async getInitialProps(ctx) {
    const isProduction = process.env.NODE_ENV === 'production';
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, isProduction };
  }

  render() {
    const { isProduction } = this.props;

    return (
      <Html>
        <Head>
          <link rel="canonical" href="https://jicjjang.github.io" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata|Lora|Space+Mono:700" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,400italic,300italic,300,500italic,700,700italic,900,900italic"
          />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/default.min.css"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <script
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/highlight.min.js"></script>

          <Metas />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {isProduction && <script src="/static/script/google-analytics.js" />}
        </body>
      </Html>
    );
  }
}
