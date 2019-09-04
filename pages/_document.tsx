import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import Metas from '../components/common/Metas';

export default class extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata|Lora|Space+Mono:700" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,400italic,300italic,300,500italic,700,700italic,900,900italic"
          />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css" />
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <Metas />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
