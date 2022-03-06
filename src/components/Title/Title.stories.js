import React from 'react';
import StyledTitle from './Title';

export default {
  title: 'Componets/StyledTitle',
  component: StyledTitle,
};

const Template = (args) => <StyledTitle {...args} >some text</StyledTitle>;

export const Primary = Template.bind({});
