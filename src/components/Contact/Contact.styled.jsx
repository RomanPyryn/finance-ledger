import { Field } from 'formik';
import styled from '@emotion/styled';

export const ContactSection = styled.section`
  position: relative;
  width: 100%;
  color: var(--text-color-second);
  background: var(--background-color-fourth);
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1360px) {
    margin-bottom: 0px;
  }
`;

export const ContactContainer = styled.div`
  padding-top: 51px;
  padding-bottom: 25px;
  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 33px;
  }
  @media screen and (min-width: 1360px) {
    padding-top: 56px;
    padding-bottom: 77px;
  }
`;

export const ContactContent = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: auto;
    width: 368px;
    padding-left: 32px;
  }
  @media screen and (min-width: 1360px) {
    width: 660px;
    padding-left: 20px;
  }
`;

export const ContactTitle = styled.h2`
  margin: 0 0 69px;
  @media screen and (min-width: 768px) {
    margin: 0 0 24px;
  }
  @media screen and (min-width: 1360px) {
    margin: 0 0 31px;
  }
`;

export const ContactImgBox = styled.div`
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

export const ContactInput = styled(Field)`
  outline: none;
  color: var(--text-color-fifth);
  font-size: 16px;
  width: 100%;
  padding: 16px 8px;
  border: 1px solid var(--border-color-first);
  border-radius: 5px;
  & + & {
    margin-top: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ContactBtn = styled.button`
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  padding: 16px 56px;
  color: var(--text-color-first);
  font-size: inherit;
  border: none;
  border-radius: 5px;
  background: var(--background-color-second);
  transition: all 300ms var(--action);
  &:hover,
  &:focus {
    opacity: 0.9;
  }
`;
