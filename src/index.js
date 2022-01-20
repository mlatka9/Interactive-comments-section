import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'styles/fonts.css';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { debounce } from 'debounce';
import { storeInLocalStorage } from 'helpers/index';

store.subscribe(
  debounce(() => {
    storeInLocalStorage('comments', store.getState().comment);
    console.log('Comments saved in Local storage');
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
