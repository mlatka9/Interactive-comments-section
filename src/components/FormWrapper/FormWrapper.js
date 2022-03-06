import { ErrorMessage, FormStyledTitle, Wrapper } from './FormWrapper.styles';
import PropTypes from 'prop-types';

const FormWrapper = ({ children, title, error }) => {
  return (
    <Wrapper>
      <FormStyledTitle>{title}</FormStyledTitle>

      {children}
      <ErrorMessage>{error?.message}</ErrorMessage>
    </Wrapper>
  );
};

FormWrapper.propTypes = {
  title: PropTypes.string,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};

export default FormWrapper;
