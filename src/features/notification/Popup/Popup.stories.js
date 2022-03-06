import React from 'react';

import Popup from './Popup';

export default {
  title: 'Componets/Popup',
  component: Popup,
};

const Template = (args) => <Popup {...args} />;

export const SuccessPopup = Template.bind({});
SuccessPopup.args = {
  title: 'Success',
  subTitle: 'Commend added',
  type: 'success',
};

export const ErrorPopup = Template.bind({});
ErrorPopup.args = {
  title: 'Error',
  subTitle: 'You dont have permission',
  type: 'error',
};
