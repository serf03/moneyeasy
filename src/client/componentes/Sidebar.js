import React from 'react'
import Content from './Content';

const Sidebar = () => {
    return(
        <nav id="sidebar">

        <div className="sidebar-header d-flex align-items-center">
          <div className="avatar"><img src={require("../img/avatar-2.jpg")} alt="..." className="img-fluid rounded-circle"/>
          </div>
          <div className="title">
            <h1 className="h5">Mark Stephen</h1>
            <p>Web Designer</p>
          </div>
        </div>
   <span className="heading">Main</span>
        <ul className="list-unstyled">
                <li className="active"><a href="index.html"> <i className="icon-home"></i>Home </a></li>
                <li><a href="tables.html"> <i className="icon-grid"></i>Tables </a></li>
                <li><a href="charts.html"> <i className="fa fa-bar-chart"></i>Charts </a></li>
                <li><a href="forms.html"> <i className="icon-padnote"></i>Forms </a></li>
                <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i className="icon-windows"></i>Example dropdown </a>
                  <ul id="exampledropdownDropdown" className="collapse list-unstyled ">
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Page</a></li>
                  </ul>
                </li>
                <li><a href="login.html"> <i className="icon-logout"></i>Login page </a></li>
        </ul><span className="heading">Extras</span>
        <ul className="list-unstyled">
          <li> <a href="#"> <i className="icon-settings"></i>Demo </a></li>
          <li> <a href="#"> <i className="icon-writing-whiteboard"></i>Demo </a></li>
          <li> <a href="#"> <i className="icon-chart"></i>Demo </a></li>
        </ul>
      </nav>
    );

}

export default Sidebar;