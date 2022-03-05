import React from 'react';
import List from './List';

export default {
  title: 'Comments/List',
  component: List,
};

const Template = (args) => <List {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  depthLevel: 0,
  parentCommentId: null,
};
