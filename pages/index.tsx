import * as React from 'react';
import { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';

import DefaultLayout from '../components/layout/DefaultLayout';
import Posts from '../components/home/Posts';
import Categories from '../components/home/Categories';
import { IPost } from '../contents/posts';
import Spinner from '../components/common/Spinner';
import BackToPosts from '../components/common/BackToPosts';
import stores from '../store';

interface IProps {
  paramPage?: number;
  paramCategoryName?: string;
}

export enum TAB_FLAG {
  POST,
  CATEGORY
}

const { postsStore, categoriesStore } = stores;

const Home: NextPage = ({ paramPage = 1, paramCategoryName = '' }: IProps) => {
  const router = useRouter();
  const [tabFlag, setTabFlag] = useState<TAB_FLAG>(TAB_FLAG.POST);
  const [page, setPage] = useState<number>(paramPage);
  const [categoryName, setCategoryName] = useState<string>(paramCategoryName);
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>(postsStore.getFilteredPosts({ page, categoryName }));
  const [loaded, setLoaded] = useState<boolean>(true);
  const [previewIndex, setPreviewIndex] = useState<number>(0);

  useEffect(() => {
    let queryCategoryName = '';
    let queryPage = 1;

    if (router.query) {
      queryCategoryName = (router.query.categoryName as string) || '';
      queryPage = parseInt(router.query.page as string, 10) || 1;
    }

    setCategoryName(queryCategoryName);
    setPage(queryPage);
  }, [router]);

  useEffect(() => {
    setFilteredPosts(postsStore.getFilteredPosts({ page, categoryName }));

    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, [page, categoryName]);

  const hasNext = React.useCallback(() => postsStore.posts && postsStore.posts.length > page * 5 && !categoryName, [
    page,
    categoryName
  ]);

  const hasPrevious = React.useCallback(() => page > 1 && !categoryName, [page, categoryName]);

  return loaded ? (
    <DefaultLayout>
      <section className="previews">
        <div>
          {categoryName && <BackToPosts clickEvent={() => setTabFlag(TAB_FLAG.POST)} />}
          {filteredPosts.map((post: IPost, index: number) => (
            <figure
              className="absolute-bg preview__img"
              style={{
                backgroundImage: `url(${post.image})`,
                display: previewIndex === index ? 'block' : 'none'
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

          <Posts
            page={page}
            hasPrevious={hasPrevious}
            hasNext={hasNext}
            categoryName={categoryName}
            tabFlag={tabFlag}
            filteredPosts={filteredPosts}
            setLoaded={setLoaded}
            setPreviewIndex={setPreviewIndex}
          />

          <Categories categories={categoriesStore.categories} tabFlag={tabFlag} setTabFlag={setTabFlag} />
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
};

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
    paramPage: page,
    paramCategoryName: categoryName
  };
};

export default observer(Home);
