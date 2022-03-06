import React from 'react';

import Card from './Card';

export default {
  title: 'Comments/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  commentId: '1',
  toggleIsReplying: () => {},
};
