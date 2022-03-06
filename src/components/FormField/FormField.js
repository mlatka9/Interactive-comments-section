import { Wrapper } from './FormField.styles';
import PropTypes from 'prop-types';

const FormField = ({ name, label, value, onChange, type = 'text' }) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} value={value} onChange={onChange}></input>
    </Wrapper>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default FormField;
