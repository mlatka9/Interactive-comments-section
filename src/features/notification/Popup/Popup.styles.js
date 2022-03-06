import styled, { keyframes } from 'styled-components';

const SlideIn = keyframes`
0%{
    transform: translateX(0);
}
20%{
    transform: translateX(calc(-100% - 20px))
}
80%{
    transform: translateX(calc(-100% - 20px))
}
100%{
    transform: translateX(0);
}
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 15px 20px;
  box-shadow: 0px 5px 20px ${({ theme }) => theme.colors.darkShadow};
  width: 400px;
  position: fixed;
  right: -400px;
  bottom: 30px;
  border-left: 8px solid
    ${({ theme, type }) => {
      if (type === 'error') return theme.colors.softRed;
      return theme.colors.green;
    }};
  border-radius: 5px;
  display: flex;
  align-items: center;
  z-index: 100;
  animation: ${SlideIn} 3s ease-in-out;
  @media (max-width: 600px) {
    padding: 12px 15px;
  }
  svg {
    width: 35px;
    height: 35px;
  }
  h3 {
    margin: 0 0 0 15px;
    color: ${({ theme }) => theme.colors.grayishBlue};
    font-weight: normal;
    font-size: 18px;
    max-width: 200px;
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
  path {
    fill: ${({ theme, type }) => {
      if (type === 'error') return theme.colors.softRed;
      return theme.colors.green;
    }};
  }
`;
