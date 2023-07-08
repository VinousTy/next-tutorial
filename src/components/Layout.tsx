import Head from 'next/head';
import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Heading2XL } from '../styles/CommonStyle';

const name = 'Next.js';
export const siteTitle = 'Next.js Tutorial';

const Container = styled('div')`
  max-width: 1244px;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

const Header = styled('header')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderImage = styled('img')`
  width: 6rem;
  height: 6rem;
  border-radius: 1000px;
`;

const HeaderHomeImage = styled('img')`
  width: 8rem;
  height: 8rem;
`;

const BackToHome = styled;

type LayoutProps = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <HeaderImage src="/images/profile.png" alt="" />
        <Heading2XL>{name}</Heading2XL>
      </Header>
      <main>{children}</main>
    </Container>
  );
};
