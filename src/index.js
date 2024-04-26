import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './app/store'; // Assuming your Redux store is defined in this file
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}> {/* Wrap the App component with Provider */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
