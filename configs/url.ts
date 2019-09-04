import * as queryString from 'query-string';

export const EMAIL = 'jicjjang12@gmail.com';
export const GITHUB_URL = 'https://github.com/jicjjang';
export const INSTAGRAM_URL = 'https://instagram.com/jicjjang12';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/jicjjang';
export const baseUrl = 'https://jicjjang.github.io';
export const PAGE_URL = {
  HOME: '/',
  RESUME: '/resume',
  ARCHIVE: '/archive',
  POST_DETAIL: '/post/:postId',
  SLIDE_DETAIL: '/slide/:slideId',
  SITEMAP: '/sitemap.xml',
  ROBOTS: '/robots.txt'
};

export const urlWithVariable = (
  url: string,
  variable?: { [key: string]: string | number },
  qs?: { [key: string]: any }
): string => {
  let replacedUrl = url;
  if (variable && Object.keys(variable).length > 0) {
    Object.keys(variable).map((pathName: string) => {
      replacedUrl = replacedUrl.replace(`:${pathName}`, `${variable[pathName]}`);
    });
  }
  if (qs) {
    const filteredQs = Object.keys(qs).reduce((acc, key) => (qs[key] ? { ...acc, [key]: qs[key] } : acc), {});
    replacedUrl = `${replacedUrl}?${queryString.stringify(filteredQs)}`;
  }
  return replacedUrl;
};
