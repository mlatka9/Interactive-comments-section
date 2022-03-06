import React from 'react';
import FormWrapper from './FormWrapper';

export default {
  title: 'Componets/FormWrapper',
  component: FormWrapper,
};

const Template = (args) => <FormWrapper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
};

export const withError = Template.bind({});
withError.args = {
  title: 'Title',
  error: {
    message: 'Some error message',
  },
};
