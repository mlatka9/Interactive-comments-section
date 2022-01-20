import React from 'react';

import CommentCard from './CommentCard';

export default {
  title: 'Comments/Card',
  component: CommentCard,
};

const Template = (args) => <CommentCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  commentId: '1',
  toggleIsReplying: () => {
    console.log('toggle is replying');
  },
};
