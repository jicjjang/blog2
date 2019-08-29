import * as React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { observer } from 'mobx-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import DefaultLayout from '../components/layout/DefaultLayout';
import { useStore } from '../store';
import { IPost } from '../contents/posts';
import { ICategory } from '../contents/categories';
import Sns from '../components/home/Sns';
import Category from '../components/home/Category';
import Post from '../components/home/Post';

const Home = observer(() => {
  const router = useRouter();
  const HomeStore = useStore();
  const [previewIndex, setPreviewIndex] = useState<number>(0);

  const getPostPreviewImage = useCallback(
    (post: IPost, index: number) => {
      return {
        backgroundImage: `url(${post.image})`,
        display: index === (previewIndex || 0) ? 'block' : 'none'
      };
    },
    [previewIndex]
  );

  useEffect(() => {
    if (router.query) {
      if (router.query.page) {
        const numPage = parseInt(router.query.page as string, 10);
        if (typeof numPage === 'number' && numPage > 0) {
          HomeStore.setPage(numPage);
        }
      } else if (router.query.categoryName) {
        HomeStore.setCategoryName(router.query.categoryName as string);
      }
    }
  }, [router]);

  const toggleTab = (e: React.MouseEvent<HTMLLIElement>) => {
    const siblingsPage = document.getElementsByClassName('tab');
    const eventTarget = e.target as HTMLLIElement;
    const siblingsTab = eventTarget.parentElement.children;

    if (siblingsTab[0] === eventTarget) {
      if (siblingsTab[0].className.indexOf('active') < 0) {
        siblingsTab[0].className = siblingsTab[0].className + ' active';
        siblingsPage[0].className = siblingsPage[0].className + ' active';
        siblingsTab[1].className = siblingsTab[1].className.split(' ')[0];
        siblingsPage[1].className = siblingsPage[1].className.split(' ')[0];
      }
    } else {
      if (siblingsTab[1].className.indexOf('active') < 0) {
        siblingsTab[1].className = siblingsTab[0].className + ' active';
        siblingsPage[1].className = siblingsPage[0].className + ' active';
        siblingsTab[0].className = siblingsTab[0].className.split(' ')[0];
        siblingsPage[0].className = siblingsPage[0].className.split(' ')[0];
      }
    }
  };

  return (
    <DefaultLayout>
      <section className="previews">
        <div>
          {HomeStore.isCategoryPage && (
            <a className="nav nav--white" href={HomeStore.baseUrl} itemProp="url">
              <i className="fa fa-lg fa-arrow-left"></i>
              <span>Back to Posts</span>
            </a>
          )}
          {(HomeStore.filteredPostList || []).map((post: IPost, index: number) => (
            <figure className="absolute-bg preview__img" style={getPostPreviewImage(post, index)} key={post.id} />
          ))}
          <div className="previews__container">
            <span>Welcome to</span>
            <h1>June</h1>
          </div>
        </div>
        <div>
          <header>
            <ul className="tabs">
              <li className="tabs__item active" onClick={toggleTab}>
                Posts
              </li>
              <li className="tabs__item" onClick={toggleTab}>
                Categories
              </li>
            </ul>
          </header>

          <div className="tab active">
            <ul itemScope={true} itemType="http://schema.org/Blog">
              {(HomeStore.filteredPostList || []).map((post: IPost, index: number) => (
                <Post key={post.id} index={index} post={post} setPreviewIndex={setPreviewIndex} />
              ))}
            </ul>

            <div className="pagination">
              {HomeStore.hasPrevious && (
                <Link
                  href={`/?page=${HomeStore.page - 1}${
                    HomeStore.categoryName ? `&categoryName=${HomeStore.categoryName}` : ''
                  }`}>
                  <a>Previous</a>
                </Link>
              )}
              {HomeStore.hasNext && (
                <Link
                  href={`/?page=${HomeStore.page + 1}${
                    HomeStore.categoryName ? `&categoryName=${HomeStore.categoryName}` : ''
                  }`}>
                  <a>Next</a>
                </Link>
              )}
            </div>

            <Sns />
          </div>

          <div className="tab">
            <ul className="cards">
              {(HomeStore.categories || []).map((category: ICategory) => (
                <Category key={category.title} category={category} />
              ))}
            </ul>

            <Sns />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
});

export default Home;
