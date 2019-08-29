export interface ICategory {
  title: string;
  image: string;
}

const categoryContents: ICategory[] = [
  {
    title: 'Javascript',
    image: 'static/image/javascript/javascript.jpg'
  },
  {
    title: 'Frontend',
    image: 'static/image/frontend/frontend.jpg'
  },
  {
    title: 'Presentation',
    image: 'static/image/presentation/presentation.jpg'
  },
  {
    title: 'Etc',
    image: 'static/image/etc/etc.jpg'
  },
  {
    title: 'Php',
    image: 'static/image/php/php.jpg'
  },
  {
    title: 'Java',
    image: 'static/image/java/java.jpg'
  },
  {
    title: 'Python',
    image: 'static/image/python/python.jpg'
  },
  {
    title: 'Life',
    image: 'static/image/life/life.jpg'
  },
  {
    title: 'Review',
    image: 'static/image/review/review.jpg'
  },
  {
    title: 'Revlog',
    image: 'static/image/revlog/revlog.jpg'
  }
];

export default categoryContents;
