import { types } from 'mobx-state-tree';

import PostsStore from './PostsStore';
import postContents, { IPost } from '../contents/posts';
import CategoriesStore from './CategoriesStore';
import categoriesContents, { ICategory } from '../contents/categories';

// Init PostsStore
const postsStore = PostsStore.create({
  posts: []
});
postContents.map((post: IPost) => postsStore.addPost(post));

// Init CategoriesStore
const categoriesStore = CategoriesStore.create({
  categories: []
});
categoriesContents.map((category: ICategory) => categoriesStore.addCategory(category));

// Init RootStore
const RootStore = types.model('RootStore', {
  postsStore: types.maybe(PostsStore),
  categoriesStore: types.maybe(CategoriesStore)
});

const stores = RootStore.create({
  postsStore,
  categoriesStore
});

export default stores;
