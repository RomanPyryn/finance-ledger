import styled from '@emotion/styled';

export const TeamSection = styled.section`
  text-align: center;
  padding-top: 72px;
  padding-bottom: 34px;
  @media screen and (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 24px;
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

export const TeamList = styled.ul`
  & li:not(:last-child) {
    margin-bottom: 30px;
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 223px);
    gap: 18px;
    & li:not(:last-child) {
      margin-bottom: 0px;
    }
  }
  @media screen and (min-width: 1360px) {
    grid-template-columns: repeat(3, 420px);
    gap: 22px;
  }
`;

export const TeamItem = styled.li`
  overflow: hidden;
  transition: all 300ms var(--action);
  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    scale: 1.02;
  }
`;

export const TeamItemContent = styled.div`
  margin: 16px 0;
`;

export const TeamItemName = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const TeamAction = styled.div`
  position: relative;
  overflow: hidden;
`;

export const TeamOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.6);

  transform: translateY(101%);
  transition: all 325ms var(--action);

  .team-item:hover &,
  .team-item:focus & {
    transform: translateY(0);
  }
`;

export const TeamOverlayList = styled.ul`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 25px;
  transform: translate(-50%, -50%);
  height: 35px;
  @media screen and (min-width: 768px) {
    gap: 15px;
  }
  @media screen and (min-width: 1360px) {
    gap: 25px;
  }
`;
