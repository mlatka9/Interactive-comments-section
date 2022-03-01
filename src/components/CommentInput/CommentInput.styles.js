import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  z-index: 50;
`;

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 25px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  gap: 25px;
  &.comment-enter {
    opacity: 0;
    transform: translateY(-40px);
  }
  &.comment-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }
  &.comment-exit {
    opacity: 1;
    transform: translateY(0);
  }
  &.comment-exit-active {
    opacity: 0;
    transform: translateY(-40px);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    padding: 20px;
  }
  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    @media (max-width: 800px) {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
      align-self: center;
    }
  }
  textarea {
    border-radius: 8px;
    outline: 1px solid ${({ theme }) => theme.colors.lightGray};
    border: none;
    resize: vertical;
    min-height: 100px;
    max-height: 300px;
    padding: 12px 24px;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.darkBlue};
    caret-color: ${({ theme }) => theme.colors.moderateBlue};
    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.moderateBlue};
    }
  }
`;
