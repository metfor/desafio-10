import type { NextPage } from 'next';
import Head from 'next/head';
import { BodyNewsPage } from '../../components/BodyNewsPage';
import { RecentNews } from '../../components/RecentNews';

const News: NextPage = () => {
  return (
    <div>
      <Head>
        <title>News</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodyNewsPage />
      <RecentNews />
    </div>
  );
};
export default News;
