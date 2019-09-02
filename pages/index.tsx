import * as React from 'react';
import { useState, useEffect } from 'react';
import { observer, useLocalStore } from 'mobx-react';
import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import DefaultLayout from '../components/layout/DefaultLayout';
import Posts from '../components/home/Posts';
import Categories from '../components/home/Categories';
import postContents, { IPost } from '../contents/posts';
import categoryContents from '../contents/categories';
import Spinner from '../components/common/Spinner';
import { PAGE_URL } from '../configs/url';

interface IProps {
  page?: number;
  categoryName?: string;
}

export enum TAB_FLAG {
  POST,
  CATEGORY
}

const Home: NextPage = observer(({ page = 1, categoryName = '' }: IProps) => {
  const router = useRouter();
  const [tabFlag, setTabFlag] = useState<TAB_FLAG>(TAB_FLAG.POST);
  const [loaded, setloaded] = useState<boolean>(true);

  useEffect(() => {
    if (router.query) {
      if (router.query.categoryName) {
        localStore.setCategoryName(router.query.categoryName as string);
      } else if (router.query.page) {
        const numPage = parseInt(router.query.page as string, 10);
        if (typeof numPage === 'number' && numPage > 0) {
          localStore.setPage(numPage);
        }
      }
    }

    setTimeout(() => {
      setloaded(true);
    }, 300);

    return () => localStore.reset();
  }, [router]);

  const localStore = useLocalStore(() => ({
    page,
    categoryName,
    previewIndex: 0,
    posts: postContents || [],
    categories: categoryContents || [],

    get hasNext(): boolean {
      return localStore.posts && localStore.posts.length > localStore.page * 5 && !localStore.categoryName;
    },

    get hasPrevious(): boolean {
      return localStore.page > 1 && !localStore.categoryName;
    },

    get isCategoryPage(): boolean {
      return !!localStore.categoryName;
    },

    get filteredPostList(): IPost[] {
      let filteredPostList = localStore.posts ? localStore.posts.slice() : []; // Deep copy

      if (filteredPostList) {
        if (localStore.categoryName) {
          filteredPostList = filteredPostList.filter(
            (post: IPost) => post.category.toLowerCase() === localStore.categoryName.toLowerCase()
          );
        }
        filteredPostList = filteredPostList.filter((_, i: number) => {
          return i >= (localStore.page - 1) * 5 && i < localStore.page * 5;
        });
      }
      return filteredPostList;
    },

    setPreviewIndex(previewIndex: number) {
      localStore.previewIndex = previewIndex;
    },

    setPage(page: number) {
      localStore.page = page;
    },

    setCategoryName(categoryName: string) {
      localStore.categoryName = categoryName;
    },

    reset() {
      (localStore.page = 1),
        (localStore.previewIndex = 0),
        (localStore.categoryName = ''),
        (localStore.posts = postContents || []),
        (localStore.categories = categoryContents || []);
    }
  }));

  return loaded ? (
    <DefaultLayout>
      <section className="previews">
        <div>
          {localStore.isCategoryPage && (
            <Link href={PAGE_URL.HOME}>
              <a className="nav nav--white" itemProp="url" onClick={() => setTabFlag(TAB_FLAG.POST)}>
                <i className="fa fa-lg fa-arrow-left"></i>
                <span>Back to Posts</span>
              </a>
            </Link>
          )}
          {(localStore.filteredPostList || []).map((post: IPost, index: number) => (
            <figure
              className="absolute-bg preview__img"
              style={{
                backgroundImage: `url(${post.image})`,
                display: localStore.previewIndex === index ? 'block' : 'none'
              }}
              key={post.id}
            />
          ))}
          <div className="previews__container">
            <span>Welcome to</span>
            <h1>June</h1>
          </div>
        </div>
        <div>
          <header>
            <ul className="tabs">
              <li
                className={`tabs__item ${tabFlag === TAB_FLAG.POST ? 'active' : ''}`}
                onClick={() => setTabFlag(TAB_FLAG.POST)}>
                Posts
              </li>
              <li
                className={`tabs__item ${tabFlag === TAB_FLAG.CATEGORY ? 'active' : ''}`}
                onClick={() => setTabFlag(TAB_FLAG.CATEGORY)}>
                Categories
              </li>
            </ul>
          </header>

          <Posts store={localStore} tabFlag={tabFlag} setloaded={setloaded} />

          <Categories store={localStore} tabFlag={tabFlag} setTabFlag={setTabFlag} />
        </div>
      </section>
    </DefaultLayout>
  ) : (
    <Spinner
      options={{
        fullSize: true
      }}
    />
  );
});

Home.getInitialProps = async ({ query }: NextPageContext) => {
  let page: number = 1;
  let categoryName: string = '';

  if (query) {
    if (query.categoryName) {
      categoryName = (query.categoryName as string) || '';
    } else if (query.page) {
      const numPage = parseInt(query.page as string, 10);
      if (typeof numPage === 'number' && numPage > 0) {
        page = numPage;
      }
    }
  }

  return {
    page,
    categoryName
  };
};

export default Home;
