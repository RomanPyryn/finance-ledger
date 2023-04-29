import styled from '@emotion/styled';

export const HeroSection = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  text-align: center;
  color: var(--text-color-first);
`;

export const HeroContainer = styled.div`
  position: relative;
  margin: 160px auto 104px;
  z-index: 2;
  @media screen and (min-width: 768px) {
    margin: 378px auto;
  }
  @media screen and (min-width: 1360px) {
    margin: 270px auto;
  }
`;

export const HeroTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 40px;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    font-size: 55px;
    padding: 0;
  }
`;

export const HeroSubTitle = styled.h2`
  font-size: 24px;
  line-height: 1.23;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    padding: 0 90px;
  }
`;

export const HeroImgBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const HeroLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
`;
