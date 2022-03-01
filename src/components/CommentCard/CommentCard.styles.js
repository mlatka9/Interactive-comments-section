import styled from 'styled-components';
import GlobalStyledButton from 'components/Button/Button';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 32px 1fr;
  gap: 20px;
  padding: 25px;
  border-radius: 8px;
  /* z-index: 100; */
  position: relative;
  z-index: 100;
  @media (max-width: 800px) {
    grid-template-columns: 100px 1fr;
    grid-template-rows: 32px 1fr auto;
    padding: 20px;
    gap: 16px 0;
  }
`;

export const CommentHeader = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  h3 {
    font-family: 'Rubik';
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin: 0 0 0 16px;
  }
  img {
    width: 32px;
    display: block;
    border-radius: 50%;
  }
  div {
    margin-left: auto;
  }
  span:last-of-type {
    color: ${({ theme }) => theme.colors.grayishBlue};
    margin-left: 16px;
  }
`;

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.moderateBlue};
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 20px;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 8px;
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  margin-left: 24px;
  cursor: pointer;
  padding: 0;
  @media (max-width: 800px) {
    margin-left: 16px;
  }
  span {
    margin-left: 5px;
  }
`;

export const ReplyButton = styled(StyledButton)`
  &:hover {
    span {
      color: ${({ theme }) => theme.colors.lightGrayishBlue};
    }
    path {
      fill: ${({ theme }) => theme.colors.lightGrayishBlue};
    }
  }
  span {
    color: ${({ theme }) => theme.colors.moderateBlue};
  }
`;
export const DeleteButton = styled(StyledButton)`
  &:hover {
    span {
      color: ${({ theme }) => theme.colors.paleRed};
    }
    path {
      fill: ${({ theme }) => theme.colors.paleRed};
    }
  }
  span {
    color: ${({ theme }) => theme.colors.softRed};
  }
`;

export const ScoreCounter = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  width: 40px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.veryLightGray};
  @media (max-width: 800px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    flex-direction: row;
    width: 100px;
    height: 40px;
    align-items: center;
    padding: 6px;
  }
  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.moderateBlue};
      }
    }
  }
  span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.moderateBlue};
  }
`;

export const CommentContent = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  color: ${({ theme }) => theme.colors.grayishBlue};
  line-height: 24px;
  @media (max-width: 800px) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
`;

export const ButtonsWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  justify-self: flex-end;
  align-self: center;
  @media (max-width: 800px) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
`;

export const Mention = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.moderateBlue};
  margin-right: 5px;
`;

export const StyledTextarea = styled.textarea`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  /* margin: 0 25px; */
  border-radius: 8px;
  outline: 1px solid ${({ theme }) => theme.colors.lightGray};
  border: none;
  resize: vertical;
  width: 100%;
  min-height: 100px;
  max-height: 300px;
  height: 100%;
  padding: 12px 24px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkBlue};
  caret-color: ${({ theme }) => theme.colors.moderateBlue};
  @media (max-width: 800px) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.moderateBlue};
  }
`;

export const CardStyledButton = styled(GlobalStyledButton)`
  justify-self: flex-end;
  grid-column: 2 / 3;
`;
