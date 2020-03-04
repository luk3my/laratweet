import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}
