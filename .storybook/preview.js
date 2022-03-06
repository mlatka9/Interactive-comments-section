import { ThemeProvider } from "styled-components"
import GlobalStyles from '../src/styles/GlobalStyles'
import { theme } from '../src/styles/theme'
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { useEffect } from "react";
import { setUser } from '../src/features/user/userSlice'
import { addComment } from '../src/features/comment/commentSlice'
import { BrowserRouter } from "react-router-dom";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}

const mockUser = { username: 'mateusz', id: '1', image: 'https://i.pravatar.cc/150?img=23' }
const mockComments = [
  {
    content: 'Example comment content', score: 10, id: '1', createdAt: '2022-03-05T19:15:17.728Z', parent: null, user: {
      id: '1',
      image: 'https://i.pravatar.cc/150?img=22',
      username: 'mateusz'
    }
  },
  {
    content: 'Example comment content 2', score: 12, id: '2', createdAt: '2022-03-03T10:15:17.728Z',parent: '1', user: {
      id: '2',
      image: 'https://i.pravatar.cc/150?img=19',
      username: 'klemens'
    },
  }
]

const StoryBookReduxWrapper = ({ children, initialState }) => {
  useEffect(() => {
    store.dispatch(setUser(mockUser))
    mockComments.forEach(comment=> {
      store.dispatch(addComment(comment))
    })
  }, [])

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export const decorators = [
  (Story) => (
    <BrowserRouter>
    <StoryBookReduxWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </StoryBookReduxWrapper>
    </BrowserRouter>
  ),
]