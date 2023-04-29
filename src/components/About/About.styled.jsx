import styled from '@emotion/styled';

export const AboutSection = styled.section`
  position: relative;
  width: 100%;
  color: var(--text-color-first);
  background: var(--background-color-second);
`;

export const AboutContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  @media screen and (min-width: 768px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media screen and (min-width: 1360px) {
    padding-top: 80px;
    padding-bottom: 90px;
  }
`;

export const AboutContent = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: auto;
    width: 368px;
    padding-left: 32px;
  }
  @media screen and (min-width: 1360px) {
    width: 660px;
    padding: 0 32px;
  }
`;

export const AboutText = styled.p`
  margin-bottom: 25px;
`;

export const AboutImgBox = styled.div`
  width: 100%;
  height: 220px;
  top: 0;
  left: 0;
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 48%;
    height: 100%;
  }
  @media screen and (min-width: 1360px) {
    width: 49%;
  }
`;
