import styled from '@emotion/styled';

export const BlogSection = styled.section`
  position: relative;
  width: 100%;
  color: var(--text-color-first);
  background: var(--background-color-third);
`;

export const BlogContainer = styled.div`
  padding-top: 48px;
  padding-bottom: 60px;
  @media screen and (min-width: 768px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media screen and (min-width: 1360px) {
    padding-top: 80px;
    padding-bottom: 85px;
  }
`;

export const BlogContent = styled.div`
  @media screen and (min-width: 768px) {
    margin-right: auto;
    width: 368px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1360px) {
    width: 660px;
    padding-right: 20px;
  }
`;

export const BlogText = styled.p`
  margin-bottom: 25px;
`;

export const BlogImgBox = styled.div`
  width: 100%;
  height: 220px;
  top: 0;
  right: 0;
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 48%;
    height: 100%;
  }
  @media screen and (min-width: 1360px) {
    width: 49%;
  }
`;
