import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Containers/App/App';
import Calculator from './Containers/CalculatorApp/calculator/calculator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
