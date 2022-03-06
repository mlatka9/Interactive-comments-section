import React from 'react';
import StyledButton from './Button';

export default {
  title: 'Componets/StyledButton',
  component: StyledButton,
};

const Template = (args) => <StyledButton {...args} >some text</StyledButton>;

export const Primary = Template.bind({});
