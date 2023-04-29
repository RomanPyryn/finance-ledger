import styled from '@emotion/styled';

export const TeamSection = styled.section`
  text-align: center;
  padding-top: 72px;
  padding-bottom: 50px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1360px) {
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
`;

export const Teamlist = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
		justify-content: space-between;
    gap: 18px;
  }
  @media screen and (min-width: 1360px) {
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
