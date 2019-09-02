import * as React from 'react';

import { EMAIL } from '../../configs/url';

const Metas = () => {
  return (
    <>
      <title>June's blog</title>
      <link rel="stylesheet" href="/static/css/main.css" />
      <link rel="stylesheet" href="/static/css/spinner.css" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="This blog has been used since 2019 using Nextjs with Reactjs" />
      <meta name="author" content={`Junseok, Choi <${EMAIL}>`} />
      <meta name="google-site-verification" content="DL3OehOD_wV9A1S0SRWoeXbMtlE5SeUZPlwGrFvPHQ8" />

      <meta name="og:type" content="blog" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@jicjjang" />
      <meta name="twitter:site" content="June" />
    </>
  );
};

export default Metas;
