import Head from "next/head";

function Seo({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="apple-touch-icon" href="./assets/head/favicon.ico" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="language" content="english" />
      {/* <meta property="fb:page_id" content="https://www.facebook.com/roocketi" /> */}
      <meta name="generator" content="Roocket Camp" />
      <meta name="copyright" content="© Roocket Camp" />
      <meta name="description" content="Roocket Camp" />
    </Head>
  );
}
export default Seo;
