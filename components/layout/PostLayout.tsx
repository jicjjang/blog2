import * as React from 'react';
import Head from 'next/head';

import Metas from '../common/Metas';
import Link from 'next/link';
import { PAGE_URL } from '~/configs/url';

const DOMAIN = 'https://jicjjang.github.io';

const PostLayout = (props: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <Head>
        <Metas />
        <meta name="og:title" content="June" />
        <meta name="og:url" content={DOMAIN} />
        <meta name="og:site_name" content="June" />
        <meta name="og:description" content="June\'s blog" />
        <meta name="og:image" content={`${DOMAIN}/static/image/mine.jpg`} />
        <meta name="twitter:description" content="June\'s blog" />
        <meta name="twitter:title" content="June" />
        <meta name="twitter:url" content={DOMAIN} />
        <meta name="twitter:site" content={DOMAIN} />
        <meta name="twitter:domain" content={DOMAIN} />
        <meta name="twitter:image" content={`${DOMAIN}/static/image/mine.jpg`} />
      </Head>

      <main>
        <article itemProp="blogPost" itemScope={true} itemType="http://schema.org/BlogPosting">
          <header className="section-padding--lg mast">
            <Link href={PAGE_URL.HOME}>
              <a className="nav nav--white" itemProp="url">
                <i className="fa fa-lg fa-arrow-left"></i>
                <span>Back to Posts</span>
              </a>
            </Link>
            <figure className="absolute-bg mast__img" style={{ backgroundImage: `url(/${postData.image}) }}` />
            <div className="mast__container">
              <span><time :datetime="new Date(postData.date).getTime()" itemprop="datePublished">{{ postDate(postData.date) }}</time></span>
              <h1 itemprop="name headline">{{ postData.title }}</h1>
              <span>Posted in {{ postData.category }}</span>
            </div>
          </header>

          {props.children}

          <section className="profile">
            <div className="profile__card">
              <div className="profile__img">
                <figure className="absolute-bg" style={{ backgroundImage: `url(/static/image/mine.jpg);` }} />
              </div>
              <div className="profile__container">
                <p>프론트 개발을 좋아하고 꾸준히 공부하는 백엔드 개발자. 새로운 기술에 관심이 많음. React + Vue 개발 진행중. 현재 Kakaopay 재직중.</p>
                <ul className="profile__social">
                  <li><a className="fa fa-lg fa-envelope-o" href="mailto:jicjjang12@gmail.com"></a></li>
                  <li><a className="fa fa-lg fa-github" href="https://github.com/jicjjang" target="_blank"></a></li>
                  <li><a className="fa fa-lg fa-linkedin" href="https://www.linkedin.com/in/jicjjang" target="_blank"></a></li>
                  <li><a className="fa fa-lg fa-instagram" href="https://instagram.com/jicjjang12" target="_blank"></a></li>
                </ul>
              </div>
            </div>
          </section>
        </article>

        <section className="next" v-if="index > -1 && this.postList[index+1]">
          <a className="next__link" :href="`${baseUrl}/${this.postList[index+1].path}`" itemprop="url" :style="`background-image: url('${baseUrl}/${this.postList[index+1].image}');`">
            <div className="next__container">
              <span>Read Next</span>
              <h2>{{ this.postList[index+1].title }}</h2>
            </div>
          </a>
        </section>

        <div id="disqus_thread"></div>
      </main>
    </div>
  );
};

export default PostLayout;
