import React from 'react';
import App from './components/app';

var state = window.__app_state;
React.render(<App state={state}></App>, window.document.getElementById('app'));