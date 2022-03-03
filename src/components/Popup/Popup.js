import { Wrapper } from './Popup.styles';
import { ReactComponent as ErrorIcon } from '../../assets/images/icons/error-icon.svg';
import { ReactComponent as SuccessIcon } from '../../assets/images/icons/success-icon.svg';

const Popup = ({ title, type }) => {
  const getIcon = (type) => {
    if (type === 'error') return <ErrorIcon />;
    else return <SuccessIcon />;
  };

  return (
    <Wrapper type={type}>
      {getIcon(type)}
      <h3>{title}</h3>
    </Wrapper>
  );
};

export default Popup;
