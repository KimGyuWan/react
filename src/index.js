import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Hd from './layout/Hd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Hd />
    <App />
  </>
);

