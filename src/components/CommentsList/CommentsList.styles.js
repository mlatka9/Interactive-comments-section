import styled from 'styled-components';

export const Wrapper = styled.ul`
  margin-left: ${({ depthLevel }) => {
    if (depthLevel === 0) return 'none';
    if (depthLevel < 3) return `45px`;
    else return 'none';
  }};
  padding-left: ${({ depthLevel }) => {
    if (depthLevel === 0) return '0px';
    if (depthLevel < 3) return `45px`;
    else return 'none';
  }};

  @media (max-width: 600px) {
    margin-left: ${({ depthLevel }) => {
      if (depthLevel === 0) return 'none';
      if (depthLevel < 3) return `20px`;
      else return 'none';
    }};
    padding-left: ${({ depthLevel }) => {
      if (depthLevel === 0) return 'none';
      if (depthLevel < 3) return `20px`;
      else return 'none';
    }};
  }

  border-left: ${({ depthLevel, theme }) => (depthLevel > 0 ? `2px solid ${theme.colors.lightGray}` : 'none')};
`;

export const TranstionWrapper = styled.div`
  &.comment-enter {
    opacity: 0;
    transform: translateX(-40px);
  }
  &.comment-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: 400ms opacity linear, 400ms transform linear;
  }
  &.comment-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.comment-exit-active {
    opacity: 0;
    transform: translateX(40px);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }
`;
