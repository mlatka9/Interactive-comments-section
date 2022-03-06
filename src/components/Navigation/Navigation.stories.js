import React from 'react';
import Navigation from './Navigation';

export default {
  title: 'Componets/Navigation',
  component: Navigation,
};

const Template = (args) => <Navigation {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
