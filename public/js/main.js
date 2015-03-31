import React from 'react';
import App from './components/app';

var state = window.__app_state;
var route = window.window.route;
React.render(<App state={state}></App>, window.document.getElementById('app'));