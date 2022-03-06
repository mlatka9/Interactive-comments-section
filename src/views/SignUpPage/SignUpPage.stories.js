import React from 'react';
import SignUpPage from './SignUpPage';

export default {
  title: 'Views/SignUpPage',
  component: SignUpPage,
};

const Template = (args) => <SignUpPage {...args} />;

export const Primary = Template.bind({});
