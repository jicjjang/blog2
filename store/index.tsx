import { createContext, useContext } from 'react';

import postContents, { IPost } from '../contents/posts';
import categoryContents from '../contents/categories';

export function HomeStore() {
  return {
    page: 1 as number,
    categoryName: '',
    baseUrl: 'https://jicjjang.github.io',
    posts: postContents || [],
    categories: categoryContents || [],

    get hasNext(): boolean {
      return this.posts && this.posts.length > this.page * 5 && !this.categoryName;
    },

    get hasPrevious(): boolean {
      return this.page > 1 && !this.categoryName;
    },

    get isCategoryPage(): boolean {
      return !!this.categoryName;
    },

    get filteredPostList(): IPost[] {
      let filteredPostList = this.posts ? this.posts.slice() : []; // Deep copy

      if (filteredPostList) {
        if (this.categoryName) {
          filteredPostList = filteredPostList.filter(
            (post: IPost) => post.category.toLowerCase() === this.categoryName.toLowerCase()
          );
        }
        filteredPostList = filteredPostList.filter((_, i: number) => {
          return i >= (this.page - 1) * 5 && i < this.page * 5;
        });
      }

      return filteredPostList;
    },

    setPage(page: number) {
      console.log(this);
      this.page = page;
    },

    setCategoryName(categoryName: string) {
      this.categoryName = categoryName;
    }
  };
}

type THomeStore = ReturnType<typeof HomeStore>;

const storeContext = createContext<THomeStore | null>(HomeStore());

export const useStore = () => {
  const store = useContext(storeContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('You have forgot to use StoreProvider, shame on you.');
  }
  return store;
};
