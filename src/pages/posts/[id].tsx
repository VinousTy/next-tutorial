import styled from '@emotion/styled';
import { Layout } from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { Heading2XL } from '../../styles/CommonStyle';

type StaticProps = {
  params: {
    id: string;
    title: string;
    date: string;
    thumbnail: string;
  };
};

type PostData = {
  postData: {
    title: string;
    date: string;
    thumbnail: string;
    id: string;
    blogContentHTML: string;
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: StaticProps) => {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
};

const LightText = styled('div')`
  color: #999;
`;

export const Post = ({ postData }: PostData) => {
  return (
    <Layout>
      <Heading2XL>{postData.title}</Heading2XL>
      <br />
      <LightText>{postData.date}</LightText>
      <br />
      {/* Todo:サニタイズ処理を行う*/}
      <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
    </Layout>
  );
};
