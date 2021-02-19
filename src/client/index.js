import React, {Fragment} from 'react';
import { render } from 'react-dom';
import Header from './componentes/Header';
import 'jquery/dist/jquery'
import './vendor/font-awesome/css/font-awesome.css'
import './css/font.css'
import './css/style.default.css'
import './css/custom.css'
import './vendor/jquery/jquery.min.js'
import './vendor/popper.js/umd/popper.min.js'
import './vendor/jquery.cookie/jquery.cookie.js'
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core';
//import './vendor/chart.js/Chart.min.js'
//import './js/charts-home.js'
import './js/front.js'



import './style/style.css';
import Home from './componentes/Home';

const App = () => {
  return(
  <Fragment>
      <Header/>
      <Home/>
  </Fragment> 
  )
};

render(
  <App/>,
  document.getElementById('app')
);
