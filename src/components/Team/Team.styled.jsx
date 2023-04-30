import styled from '@emotion/styled';

export const TeamSection = styled.section`
  text-align: center;
  padding-top: 72px;
  padding-bottom: 50px;
  @media screen and (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1360px) {
    padding-top: 50px;
    padding-bottom: 40px;
  }
`;

export const TeamContent = styled.div`
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1360px) {
  }
`;

export const TeamText = styled.p`
  margin-bottom: 63px;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1360px) {
    margin-bottom: 36px;
  }
`;

export const Teamlist = styled.ul`
  & li:not(:last-child) {
		margin-bottom: 30px;
	}
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 223px);
    gap: 18px;
  }
  @media screen and (min-width: 1360px) {
    grid-template-columns: repeat(3, 420px);
    gap: 22px;
  }
`;

export const TeamItemName = styled.h3`
  font-size: 20px;
  margin: 16px 0 8px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;
