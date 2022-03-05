import styled from 'styled-components';

export const Wrapper = styled.div`
  label {
    font-family: 'Rubik';
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.grayishBlue};
  }
  input {
    display: block;
    margin: 10px 0 25px;
    padding: 10px 15px;
    border-radius: 3px;
    border: none;
    outline: 2px solid ${({ theme }) => theme.colors.lightGray};
    font-family: 'Rubik';
    font-size: 18px;
    font-weight: 500;
  }
`;
