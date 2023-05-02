import styled from '@emotion/styled';

export const HeroSection = styled.section`
	position: relative;
	height: 533px;
  width: 100%;
  text-align: center;
  color: var(--text-color-first);
  @media screen and (min-width: 768px) {
    height: 1024px;
  }
  @media screen and (min-width: 1360px) {
    height: 768px;
  }
`;

export const HeroContainer = styled.div`
  position: relative;
  padding-top: 180px;
  padding-bottom: 92px;
  z-index: 2;
  @media screen and (min-width: 768px) {
    padding-top: 380px;
    padding-bottom: 377px;
  }
  @media screen and (min-width: 1360px) {
    padding-top: 270px;
    padding-bottom: 278px;
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
  top: 0;
  left: 0;
  width: 100%;
  height: 533px;
  @media screen and (min-width: 768px) {
    height: 1024px;
  }
  @media screen and (min-width: 1360px) {
    height: 768px;
  }
`;

export const HeroLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
`;
