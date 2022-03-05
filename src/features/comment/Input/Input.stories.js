import React from 'react';

import Input from './Input';

export default {
  title: 'Comments/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  commentId: '1',
  isVisible: true,
};
