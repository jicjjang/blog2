import * as React from 'react';
import Head from 'next/head';

import { baseUrl } from '../../configs/url';
import { IPost } from '../../contents/posts';

declare var hljs: any;

interface IProps {
  slide: IPost;
}

const SlidesLayout = ({ slide, children }: React.PropsWithChildren<IProps>) => {
  React.useEffect(() => {
    setTimeout(() => {
      Reveal.initialize({
        dependencies: [
          { src: '/static/slides/plugin/markdown/marked.js' },
          { src: '/static/slides/plugin/markdown/markdown.js' },
          { src: '/static/slides/plugin/notes/notes.js', async: true },
          {
            src: '/static/slides/plugin/highlight/highlight.js',
            async: true,
            callback: function() {
              hljs.initHighlightingOnLoad();
            }
          }
        ]
      });
    }, 200);
  }, []);

  return (
    <>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <meta name="og:title" content={slide.title || 'June'} />
        <meta name="og:url" content={`${baseUrl}${slide.path}`} />
        <meta name="og:site_name" content="June" />
        <meta name="og:description" content={slide.title || "June's blog"} />
        <meta name="og:image" content="/static/image/mine.jpg" />
        <meta name="twitter:description" content={slide.title || "June's blog"} />
        <meta name="twitter:title" content="June" />
        <meta name="twitter:url" content={`${baseUrl}${slide.path}`} />
        <meta name="twitter:site" content={`${baseUrl}${slide.path}`} />
        <meta name="twitter:domain" content={`${baseUrl}${slide.path}`} />
        <meta name="twitter:image" content="/static/image/mine.jpg" />

        <link rel="stylesheet" href="/static/slides/css/reveal.css" />
        <link rel="stylesheet" href="/static/slides/css/theme/black.css" />
        <link rel="stylesheet" href="/static/slides/lib/css/zenburn.css" />

        <script type="text/javascript" src="/static/slides/js/reveal.js" async={false} />
        <script type="text/javascript" src="/static/slides/lib/js/head.min.js" />
      </Head>

      <div className="reveal" style={{ position: 'absolute' }}>
        {children}
      </div>
    </>
  );
};

export default SlidesLayout;

{
  /* ,
    created() {
      slideName = this.$route.path.split('/slides/')[1] || '';

      for (let i in this.postList) {
        if (this.postList[i].path.split('slides/')[1] === slideName) {
          slide = this.postList[i];
          this.index = parseInt(i);
          break;
        }
      }
    }, */
}
