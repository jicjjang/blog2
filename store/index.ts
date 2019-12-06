import { types } from 'mobx-state-tree';

import PostsStore from './PostsStore';
import postContents from '../contents/posts';
import CategoriesStore from './CategoriesStore';
import categoriesContents from '../contents/categories';

// Init PostsStore
const postsStore = PostsStore.create({
  posts: postContents
});

// Init CategoriesStore
const categoriesStore = CategoriesStore.create({
  categories: categoriesContents
});

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
