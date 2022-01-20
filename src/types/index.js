import PropTypes from 'prop-types';

export const commentType = PropTypes.shape({
  id: PropTypes.string,
  content: PropTypes.string,
  createdAt: PropTypes.number,
  score: PropTypes.number,
  parentId: PropTypes.string,
  user: PropTypes.shape({
    username: PropTypes.string,
    image: PropTypes.shape({
      png: PropTypes.string,
      webp: PropTypes.string,
    }),
  }),
});
