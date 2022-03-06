import styled from 'styled-components';

export const Wrapper = styled.div`
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
