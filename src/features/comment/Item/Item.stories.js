import React from 'react';

import Item from './Item';

export default {
  title: 'Comments/Item',
  component: Item,
};

const Template = (args) => <Item {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  commentId: '1',
};
