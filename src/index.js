import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import ProviderApp from './components/ProviderApp';
import store from './store';
import ArticlesContextProvider from './providers/articlesProvider';
import SearchContextProvider from './providers/searchProvider';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <ArticlesContextProvider>
    <SearchContextProvider>
      <ProviderApp />
    </SearchContextProvider>
  </ArticlesContextProvider>,
  document.getElementById('root')
);
