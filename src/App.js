import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import CommentsList from 'components/CommentsList/CommentsList';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 50px;
  @media (max-width: 600px) {
    margin: 15px;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <CommentsList />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
