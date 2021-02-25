import React  from 'react';
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
import './js/front.js'
import './style/style.css';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from './componentes/Layout';
import ContentHome from './componentes/ContentHome';
import Sidebar from './componentes/otro_componentes/sidebar';
import ContentCuentas from './componentes/ContentCuentas';
import ContentClientes from './componentes/ContentClientes';
import ContentHistorial from './componentes/ContentHistorial';
import ContentUsuarios from './componentes/ContentUsuarios';
import ContentConfiguracion from './componentes/ContentConfiguracion';
const App = () => {
  return(
    <Router>
      <Layout/>
      <Switch>
         <Route exact path='/'>
          <div className="d-flex align-items-stretch">
              <Sidebar/>
              <ContentHome title="Inicio"/>
          </div> 
         </Route>
         <Route path='/Cuentas'>
          <div className="d-flex align-items-stretch">
              <Sidebar/>
              <ContentCuentas title="Cuentas"/>
          </div> 
         </Route>
         <Route path='/Clientes'>
          <div className="d-flex align-items-stretch">
              <Sidebar/>
              <ContentClientes title="Clientes"/>
          </div> 
         </Route>
         <Route path='/Historial'>
          <div className="d-flex align-items-stretch">
              <Sidebar/>
              <ContentHistorial title="Historial"/>
          </div> 
         </Route>
         <Route path='/Usuarios'>
          <div className="d-flex align-items-stretch">
              <Sidebar/>
              <ContentUsuarios title="Usuarios"/>
          </div> 
         </Route>
         <Route path='/Configuracion'>
          <div className="d-flex align-items-stretch">
              <Sidebar/>
              <ContentConfiguracion title="Configuracionó"/>
          </div> 
         </Route>
      </Switch>
    </Router>

  )
};

render(
  <App/>,document.getElementById('app')
);
