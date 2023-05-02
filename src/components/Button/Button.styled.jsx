import styled from '@emotion/styled';

export const MainButton = styled.a`
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  color: var(--text-color-first);
  font-size: inherit;
  border: none;
  border-radius: 5px;
  background: transparent;
  transition: all 300ms var(--action);

  &.button-hero {
    background: var(--background-color-second);
    &:hover,
    &:focus {
      opacity: 0.9;
    }
  }

  &.button-about {
    border: 1px solid var(--background-color-first);
    &:hover,
    &:focus {
      background: var(--background-color-first);
      color: var(--text-color-third);
      border: 1px solid var(--background-color-second);
    }
  }

  &.button-blog {
    border: 1px solid var(--background-color-first);
    &:hover,
    &:focus {
      background: var(--background-color-first);
      color: var(--text-color-fourth);
      border: 1px solid var(--background-color-third);
    }
  }
`;
