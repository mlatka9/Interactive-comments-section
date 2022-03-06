import React from 'react';
import CommentsPage from './CommentsPage';

export default {
  title: 'Views/CommentsPage',
  component: CommentsPage,
};

const Template = (args) => <CommentsPage {...args} />;

export const Primary = Template.bind({});
