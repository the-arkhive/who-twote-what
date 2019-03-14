import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

<Route path='/' component={App} />

ReactDOM.render(<App />, document.getElementById('root'));
