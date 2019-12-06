import { types } from 'mobx-state-tree';

export interface ICategory {
  title: string;
  image: string;
}

const CategoryStore = types.model('CategoryStore', {
  title: types.string,
  image: types.string
});

const CategoriesStore = types
  .model('CategoriesStore', {
    categories: types.array(CategoryStore)
  })
  .actions(self => ({
    addCategory(category: ICategory) {
      self.categories.push(CategoryStore.create(category));
    }
  }));

export default CategoriesStore;
