import React from 'react';
import DeleteModal from './DeleteModal';

export default {
  title: 'Comments/DeleteModal',
  component: DeleteModal,
};

const Template = (args) => <DeleteModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  handleDeleteComment: () => {},
  handleCloseModal: () => {},
};
