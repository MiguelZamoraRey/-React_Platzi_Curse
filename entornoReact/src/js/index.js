import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import WelcomeComponent from './components/welcome';

const app = document.getElementById('app');

ReactDOM.render(<WelcomeComponent/>, app);