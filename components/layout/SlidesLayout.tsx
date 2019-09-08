import * as React from 'react';
import Head from 'next/head';

import { baseUrl } from '../../configs/url';
import { IPost } from '../../store/PostsStore';

declare var Reveal: RevealStatic & {
  isReady: () => boolean;
};

interface IProps {
  slide: IPost;
}

const SlidesLayout = ({ slide, children }: React.PropsWithChildren<IProps>) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);

  const setCorrectSlidesLayout = () => {
    const repeatEvent = setInterval(() => {
      if (Reveal && Reveal.isReady()) {
        clearInterval(repeatEvent);
        setLoaded(true);
        Reveal.layout(); // display가 block이 된 다음 layout을 다시 해야함
      }
    }, 300);
  };

  React.useEffect(() => {
    setCorrectSlidesLayout();

    setTimeout(() => {
      Reveal.initialize({
        dependencies: [
          { src: '/static/slides/plugin/notes/notes.js', async: true }
          // 안쓰기로 한 기능들 제거 (all for markdown)
          // { src: '/static/slides/plugin/markdown/marked.js' },
          // { src: '/static/slides/plugin/markdown/markdown.js' },
          // {
          //   src: '/static/slides/plugin/highlight/highlight.js',
          //   async: true,
          //   callback: function() {
          //     hljs.initHighlightingOnLoad();
          //   }
          // }
        ],
        minScale: 0.66,
        maxScale: 0.66
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

      <div className="reveal" style={{ position: 'absolute', display: loaded ? 'block' : 'none' }}>
        {children}
      </div>
    </>
  );
};

export default SlidesLayout;
