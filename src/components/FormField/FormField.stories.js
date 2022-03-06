import React from 'react';
import FormField from './FormField';

export default {
  title: 'Componets/FormField',
  component: FormField,
};

const Template = (args) => <FormField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'login',
  label: 'Login:',
  value: '',
  onChange: () => {},
};
