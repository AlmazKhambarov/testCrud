import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import usersReducer from './features/Users'
import { BrowserRouter } from 'react-router-dom';

// import store from './reduxToolkit/store';

const store = configureStore({
  reducer:{
    users: usersReducer,
  }
}) 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
       <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


