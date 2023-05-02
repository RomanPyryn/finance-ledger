import styled from '@emotion/styled';

export const CasesSection = styled.section`
  text-align: center;
  padding-top: 56px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 48px;
  }
  @media screen and (min-width: 1360px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const CasesList = styled.ul`
  & li:not(:last-child) {
    margin-bottom: 8px;
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 223px);
    gap: 18px;
  }
  @media screen and (min-width: 1360px) {
    grid-template-columns: repeat(3, 421px);
    grid-column-gap: 20px;
    grid-row-gap: 22px;
  }
`;

export const CasesItem = styled.li`
	&:hover,
	&:focus {
		opacity: 0.8;
	}
`;

export const CasesText = styled.p`
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1360px) {
    margin-bottom: 36px;
  }
`;
