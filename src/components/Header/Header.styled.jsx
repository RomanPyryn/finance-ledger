import styled from '@emotion/styled';

export const MainHeader = styled.header`
  padding: 22px 0;
  color: var(--text-color-first);
  background: var(--background-color-fifth);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
		justify-content: space-between;
		align-items: center;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 28px;
  fill: var(--background-color-second);
	@media screen and (min-width: 768px) {
    font-size: 35px;
  }
`;

export const GreenPartLogo = styled.span`
  color: var(--text-color-third);
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
	gap: 12px;
	@media screen and (min-width: 768px) {
    gap: 12px;
  }
	@media screen and (min-width: 1360px) {
    gap: 45px;
  }
`;

export const NavigationLink = styled.a`
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
