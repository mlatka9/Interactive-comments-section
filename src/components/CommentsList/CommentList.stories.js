import React from 'react';
import CommentsList from './CommentsList';

export default {
  title: 'Comments/List',
  component: CommentsList,
};

const Template = (args) => <CommentsList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  depthLevel: 0,
  parentCommentId: null,
};
