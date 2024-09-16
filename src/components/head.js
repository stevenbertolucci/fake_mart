import React from 'react';

const Head = ({ title }) => {
  React.useEffect(() => {
    // Dynamically update the document title
    document.title = title;
  }, [title]);

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Favicon */}
      <link rel="shortcut icon" href={`${process.env.PUBLIC_URL}/assets/favicon/favicon.ico`} type="image/x-icon" />

      {/* Libs CSS */}
      <link rel="stylesheet" href={`${process.env.PUBLIC_URL}/assets/css/libs.bundle.css`} />

      {/* Theme CSS */}
      <link rel="stylesheet" href={`${process.env.PUBLIC_URL}/assets/css/theme.bundle.css`} />
    </>
  );
};

export default Head;