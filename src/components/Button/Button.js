import styled from 'styled-components';

const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  text-transform: uppercase;
  line-height: 24px;
  font-weight: 500;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  cursor: pointer;
  align-self: flex-start;
  background-color: ${({ theme }) => theme.colors.moderateBlue};
  transition: background-color 100ms ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
  }
  @media (max-width: 800px) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    justify-self: flex-end;
    align-self: center;
  }
`;

export default StyledButton;
