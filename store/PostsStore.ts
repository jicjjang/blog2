import { types } from 'mobx-state-tree';

import { IPost } from '../contents/posts';

const PostStore = types.model('PostStore', {
  id: types.number,
  layout: types.string,
  path: types.string,
  title: types.string,
  date: types.string,
  category: types.string,
  description: types.string,
  image: types.string
});

const PostsStore = types
  .model('PostsStore', {
    posts: types.optional(types.array(PostStore), [])
  })
  .actions(self => ({
    addPost(post: IPost) {
      self.posts.push(PostStore.create(post));
    },
    getFilteredPosts({ page = 1, categoryName = undefined }: { page?: number; categoryName?: string }) {
      if (categoryName) {
        return self.posts.filter((post: IPost) => post.category.toLowerCase() === categoryName.toLowerCase());
      }
      return self.posts.filter((_, i: number) => i >= (page - 1) * 5 && i < page * 5);
    },
    getItem(path: string) {
      return self.posts.filter(post => post.path === `/${post.layout}/${path}`)[0];
    },
    getNextItem(path: string) {
      let nextIndex: number = undefined;
      self.posts.forEach((post, index: number) => {
        if (post.path === `/${post.layout}/${path}` && index !== 0) {
          nextIndex = index - 1;
        }
      });

      return self.posts[nextIndex];
    }
  }));

export default PostsStore;
