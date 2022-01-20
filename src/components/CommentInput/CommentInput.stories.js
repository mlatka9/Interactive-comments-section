import React from 'react';

import CommentInput from './CommentInput';

export default {
  title: 'Comments/Input',
  component: CommentInput,
};

const Template = (args) => <CommentInput {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  commentId: '1',
  isVisible: true,
};
