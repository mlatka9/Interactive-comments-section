import styled from 'styled-components';
import StyledTitle from 'components/Title/Title';

const ErrorMessage = styled.p`
  color: red;
  position: absolute;
  bottom: 25px;
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 40px 80px;
  border-radius: 10px;
  position: relative;
`;

const FormStyledTitle = styled(StyledTitle)`
  margin-bottom: 40px;
`;

const FormWrapper = ({ children, title, error }) => {
  return (
    <Wrapper>
      <FormStyledTitle>{title}</FormStyledTitle>

      {children}
      <ErrorMessage>{error?.message}</ErrorMessage>
    </Wrapper>
  );
};

export default FormWrapper;
