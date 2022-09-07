import React from 'react';
import ReactDOM from 'react-dom/client';

import '../assets/stylesheets/application.scss';

import App from './components/App';

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}
