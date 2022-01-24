import { render, screen, fireEvent } from 'test-utils';
import DeleteModal from './DeleteModal';

it('render card component and delete button', async () => {
  const mockHandleDeleteComment = jest.fn();
  render(<DeleteModal handleDeleteComment={mockHandleDeleteComment} handleCloseModal={() => {}} />);
  const deleteButton = screen.getByRole('button', { name: /yes, delete/i });
  fireEvent.click(deleteButton);
  expect(mockHandleDeleteComment).toHaveBeenCalledTimes(1);
  const closeButton = screen.getByRole('button', { name: /no, cancel/i });
  fireEvent.click(closeButton);
});

it('render card component and cancel button', async () => {
  const mockHandleCloseModal = jest.fn();
  render(<DeleteModal handleCloseModal={mockHandleCloseModal} handleDeleteComment={() => {}} />);
  const closeButton = screen.getByRole('button', { name: /no, cancel/i });
  fireEvent.click(closeButton);
  expect(mockHandleCloseModal).toHaveBeenCalledTimes(1);
});
