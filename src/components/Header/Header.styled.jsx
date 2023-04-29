import styled from '@emotion/styled';

export const MainHeader = styled.header`
	position: fixed;
	width: 100%;
  padding: 22px 0;
  color: var(--text-color-first);
  background: transparent;
	z-index: 10;
`;

export const HeaderContainer = styled.div`
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
    position: relative;
		&::after {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: var(--background-color-first);
  }
  }
`;
