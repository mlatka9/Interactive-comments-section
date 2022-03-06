import styled from 'styled-components';
import StyledTitle from 'components/Title/Title';

export const ErrorMessage = styled.p`
  color: red;
  position: absolute;
  bottom: 25px;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 40px 80px;
  border-radius: 10px;
  position: relative;
`;

export const FormStyledTitle = styled(StyledTitle)`
  margin-bottom: 40px;
`;
