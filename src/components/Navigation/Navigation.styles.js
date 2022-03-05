import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  padding: 30px 0 50px;
  display: flex;
  align-items: center;
  font-family: 'Rubik';
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkBlue};
  span {
    color: ${({ theme }) => theme.colors.grayishBlue};
    margin: 0 5px 0 auto;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-family: 'Rubik';
  font-size: 18px;
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.colors.moderateBlue};
  }
`;

export const EmphasisedStyledButton = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.moderateBlue};
  color: ${({ theme }) => theme.colors.moderateBlue};
  font-size: 18px;
  font-weight: 500;
  padding: 6px 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: 30px;
  text-decoration: none;
  cursor: pointer;
`;

export const LoginBox = styled.div`
  margin-left: auto;
`;
