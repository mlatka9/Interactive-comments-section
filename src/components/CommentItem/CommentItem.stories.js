import React from 'react';

import CommentItem from './CommentItem';

export default {
  title: 'Comments/Item',
  component: CommentItem,
};

const Template = (args) => <CommentItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  commentId: '1',
};
