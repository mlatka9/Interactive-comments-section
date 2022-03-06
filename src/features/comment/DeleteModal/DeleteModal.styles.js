import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }100%{
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  padding: 32px;
  border-radius: 8px;
  max-width: 400px;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  animation: ${fadeIn} 200ms ease-in-out;
  @media (max-width: 500px) {
    padding: 24px;
  }

  div {
    display: flex;
  }
  h2 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: 24px;
    font-weight: 500;
    margin: 0;
  }
  p {
    color: ${({ theme }) => theme.colors.grayishBlue};
    font-size: 16px;
    line-height: 24px;
    margin: 24px 0 20px;
  }
  button {
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    border: none;
    padding: 12px 32px;
    border-radius: 8px;
    cursor: pointer;
    @media (max-width: 500px) {
      padding: 11px 20px;
    }
    &:nth-of-type(1) {
      background-color: ${({ theme }) => theme.colors.grayishBlue};
      margin-right: 14px;
      &:hover {
        background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
      }
    }
    &:nth-of-type(2) {
      background-color: ${({ theme }) => theme.colors.softRed};
      &:hover {
        background-color: ${({ theme }) => theme.colors.paleRed};
      }
    }
  }
`;

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  z-index: 500;
`;
