import { Wrapper } from './FormField.styles';

const FormField = ({ name, label, value, onChange, type = 'text' }) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} value={value} onChange={onChange}></input>
    </Wrapper>
  );
};

export default FormField;
