import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './branding/theme';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './stateManager/store/generateStore';
import './branding/App.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
  </ThemeProvider>
  </Provider>,
  document.querySelector('#root'),
);

