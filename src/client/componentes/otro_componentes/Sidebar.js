import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return(
        <nav id="sidebar">

        <div className="sidebar-header d-flex align-items-center">
          <div className="avatar"><img src={require("../../img/avatar-2.jpg")} alt="..." className="img-fluid rounded-circle"/>
          </div>
          <div className="title">
            <h1 className="h5">Mark Stephen</h1>
            <p>Web Designer</p>
          </div>
        </div>
   <span className="heading">Main</span>
        <ul className="list-unstyled">
                <li className="active"><Link to="/"> <i className="fas fa-home"></i>Home </Link></li>
                <li><Link to="/Cuentas"> <i className="fas fa-user-circle"></i>Cuentas </Link></li>
                <li><Link to="/Clientes"> <i className="fas fa-users"></i>Clientes </Link></li>
                <li><Link to="/Historial"> <i className="fas fa-history"></i>Historial </Link></li>
                <li><Link to="/Usuarios"> <i className="far fa-user"></i>Usuarios</Link></li>
        </ul><span className="heading">Extras</span>
        <ul className="list-unstyled">
          <li> <Link to="/Configuracion"><i className="fas fa-users-cog"></i>Configuracion</Link></li>
        </ul>
      </nav>
    );

}

export default Sidebar;