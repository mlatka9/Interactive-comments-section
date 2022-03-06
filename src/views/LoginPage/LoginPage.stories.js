import React from 'react';
import LoginPage from './LoginPage';

export default {
  title: 'Views/LoginPage',
  component: LoginPage,
};

const Template = (args) => <LoginPage {...args} />;

export const Primary = Template.bind({});
