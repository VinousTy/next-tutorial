import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { BoldText, SectionMd } from '../styles/CommonStyle';
import Link from 'next/link';
import styled from '@emotion/styled';
import { getSortedPostsData } from '../lib/posts';

const Grid = styled('div')`
  display: grid;
  flex-wrap: wrap;
  max-width: 1200px;
  gap: 40px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

const ThumbnailImage = styled('img')`
  width: 950px;
  height: 400px;
  margin-bottom: 20px;
  box-shadow: 4px 5px 12px black;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: translate(4px, 5px);
    box-shadow: none;
  }
`;

const LightText = styled('small')`
  color: #999;
`;

type HomeProps = {
  allPostData: {
    id: string;
    title: string;
    date: string;
    thumbnail: string;
  }[];
};

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Home: NextPage<HomeProps> = ({ allPostData }) => {
  return (
    <Layout>
      <SectionMd>
        <p>
          私はエンジニアとして、ソフトウェア開発に情熱を持ち、クリエイティブな問題解決と技術的な挑戦を楽しんでいます。
        </p>
      </SectionMd>

      <section>
        <h2>エンジニアブログ</h2>
        <Grid>
          {allPostData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <ThumbnailImage src={thumbnail} alt="サムネイル画像" />
              </Link>
              <Link href={`/posts/${id}`} legacyBehavior>
                <BoldText>{title}</BoldText>
              </Link>
              <br />
              <LightText>{date}</LightText>
            </article>
          ))}
        </Grid>
      </section>
    </Layout>
  );
};

export default Home;
