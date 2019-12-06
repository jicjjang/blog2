export const EMAIL = 'jicjjang12@gmail.com';
export const GITHUB_URL = 'https://github.com/jicjjang';
export const INSTAGRAM_URL = 'https://instagram.com/jicjjang';
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
    Object.keys(variable).forEach((pathName: string) => {
      replacedUrl = replacedUrl.replace(`:${pathName}`, `${variable[pathName]}`);
    });
  }
  if (qs) {
    const result: { [key: string]: string } = {};

    Object.entries(qs)
      .filter(qsValue => !!qsValue[1])
      .forEach(filteredQsValue => {
        result[filteredQsValue[0]] = filteredQsValue[1];
      });

    const urlParams = new URLSearchParams(result);
    const stringUrlParams = urlParams.toString();
    replacedUrl = `${replacedUrl}${stringUrlParams ? `?${stringUrlParams}` : ''}`;
  }
  return replacedUrl;
};
