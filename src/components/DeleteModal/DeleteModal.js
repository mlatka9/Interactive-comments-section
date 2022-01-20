import { Backdrop, Wrapper } from './DeleteModal.styles';
import reactDom from 'react-dom';
import PropTypes from 'prop-types';

const rootModal = document.querySelector('#root-modal');

const DeleteModal = ({ handleDeleteComment, handleCloseModal }) => {
  return reactDom.createPortal(
    <>
      <Wrapper>
        <h2>Delete comment</h2>
        <p>Are you sure you want to delete this comment? This will remove the comment and can’t be undone.</p>
        <div>
          <button onClick={handleCloseModal}>no, cancel</button>
          <button onClick={handleDeleteComment}>yes, delete</button>
        </div>
      </Wrapper>
      <Backdrop onClick={handleCloseModal} />
    </>,
    rootModal
  );
};

DeleteModal.propTypes = {
  handleDeleteComment: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default DeleteModal;
