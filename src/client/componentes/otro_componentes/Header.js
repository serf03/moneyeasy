import React from 'react'


export default function Header(){

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="search-panel">
          <div className="search-inner d-flex align-items-center justify-content-center">
            <div className="close-btn">
              Cerrar <i className="fa fa-close"></i>
            </div>
            <form id="searchForm" action="#">
              <div className="form-group">
                <input
                  type="search"
                  name="search"
                  className="form-control"
                  placeholder="What are you searching for..."
                />
                <button type="submit" className="submit">
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <div className="navbar-header">
            <a href="index.html" className="navbar-brand">
              <div className="brand-text brand-big visible text-uppercase">
                <strong className="text-primary">Dark</strong>
                <strong>Admin</strong>
              </div>
              <div className="brand-text brand-sm">
                <strong className="text-primary">D</strong>
                <strong>A</strong>
              </div>
            </a>
            <button className="sidebar-toggle">
              <i className="fa fa-long-arrow-left"></i>
            </button>
          </div>
          <div className="right-menu list-inline no-margin-bottom">
            <div className="list-inline-item">
              <a href="#" className="search-open nav-link">
              <i className="fas fa-search"></i>
              </a>
            </div>
            <div className="list-inline-item dropdown">
              <a
                id="navbarDropdownMenuLink1"
                href="http://example.com"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                className="nav-link messages-toggle"
              >
                <i className="icon-email"></i>
                <span className="badge dashbg-1">5</span>
              </a>
              <div
                aria-labelledby="navbarDropdownMenuLink1"
                className="dropdown-menu messages"
              >
                <a
                  href="#"
                  className="dropdown-item message d-flex align-items-center"
                >
                  <div className="profile">
                    <img
                      src={require("../../img/avatar-2.jpg")}
                      alt="..."
                      className="img-fluid"
                    />
                    <div className="status online"></div>
                  </div>
                  <div className="content">
                    {" "}
                    <strong className="d-block">Nadia Halsey</strong>
                    <span className="d-block">lorem ipsum dolor sit amit</span>
                    <small className="date d-block">9:30am</small>
                  </div>
                </a>
                <a
                  href="#"
                  className="dropdown-item message d-flex align-items-center"
                >
                  <div className="profile">
                    <img
                      src={require("../../img/avatar-2.jpg")}
                      alt="..."
                      className="img-fluid"
                    />
                    <div className="status away"></div>
                  </div>
                  <div className="content">
                    {" "}
                    <strong className="d-block">Peter Ramsy</strong>
                    <span className="d-block">lorem ipsum dolor sit amit</span>
                    <small className="date d-block">7:40am</small>
                  </div>
                </a>
                <a
                  href="#"
                  className="dropdown-item message d-flex align-items-center"
                >
                  <div className="profile">
                    <img
                      src={require("../../img/avatar-1.jpg")}
                      alt="..."
                      className="img-fluid"
                    />
                    <div className="status busy"></div>
                  </div>
                  <div className="content">
                    {" "}
                    <strong className="d-block">Sam Kaheil</strong>
                    <span className="d-block">lorem ipsum dolor sit amit</span>
                    <small className="date d-block">6:55am</small>
                  </div>
                </a>
                <a
                  href="#"
                  className="dropdown-item message d-flex align-items-center"
                >
                  <div className="profile">
                    <img
                      src={require("../../img/avatar-5.jpg")}
                      alt="..."
                      className="img-fluid"
                    />
                    <div className="status offline"></div>
                  </div>
                  <div className="content">
                    {" "}
                    <strong className="d-block">Sara Wood</strong>
                    <span className="d-block">lorem ipsum dolor sit amit</span>
                    <small className="date d-block">10:30pm</small>
                  </div>
                </a>
                <a href="#" className="dropdown-item text-center message">
                  {" "}
                  <strong>
                    See All Messages <i className="fa fa-angle-right"></i>
                  </strong>
                </a>
              </div>
            </div>

            <div className="list-inline-item dropdown">
              <a
                id="navbarDropdownMenuLink2"
                href="http://example.com"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                className="nav-link tasks-toggle"
              >
                <i className="icon-new-file"></i>
                <span className="badge dashbg-3">9</span>
              </a>
              <div
                aria-labelledby="navbarDropdownMenuLink2"
                className="dropdown-menu tasks-list"
              >
                <a href="#" className="dropdown-item">
                  <div className="text d-flex justify-content-between">
                    <strong>Task 1</strong>
                    <span>40% complete</span>
                  </div>
                  <div className="progress">
                    <div
                      role="progressbar"
                      style={{width: '40%'}}
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      className="progress-bar dashbg-1"
                    ></div>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <div className="text d-flex justify-content-between">
                    <strong>Task 2</strong>
                    <span>20% complete</span>
                  </div>
                  <div className="progress">
                    <div
                      role="progressbar"
                      style={{width: '20%'}}
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      className="progress-bar dashbg-3"
                    ></div>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <div className="text d-flex justify-content-between">
                    <strong>Task 3</strong>
                    <span>70% complete</span>
                  </div>
                  <div className="progress">
                    <div
                      role="progressbar"
                      style={{width: "70%"}}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      className="progress-bar dashbg-2"
                    ></div>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <div className="text d-flex justify-content-between">
                    <strong>Task 4</strong>
                    <span>30% complete</span>
                  </div>
                  <div className="progress">
                    <div
                      role="progressbar"
                      style={{width: "30%"}}
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      className="progress-bar dashbg-4"
                    ></div>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <div className="text d-flex justify-content-between">
                    <strong>Task 5</strong>
                    <span>65% complete</span>
                  </div>
                  <div className="progress">
                    <div
                      role="progressbar"
                      style={{width: "65%"}}
                      aria-valuenow="65"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      className="progress-bar dashbg-1"
                    ></div>
                  </div>
                </a>
                <a href="#" className="dropdown-item text-center">
                  {" "}
                  <strong>
                    See All Tasks <i className="fa fa-angle-right"></i>
                  </strong>
                </a>
              </div>
            </div>
            <div className="list-inline-item dropdown menu-large">
              <a href="#" data-toggle="dropdown" className="nav-link">
                Mega <i className="fa fa-ellipsis-v"></i>
              </a>
              <div className="dropdown-menu megamenu">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <strong className="text-uppercase">Elements Heading</strong>
                    <ul className="list-unstyled mb-3">
                      <li>
                        <a href="#">Lorem ipsum dolor</a>
                      </li>
                      <li>
                        <a href="#">Sed ut perspiciatis</a>
                      </li>
                      <li>
                        <a href="#">Voluptatum deleniti</a>
                      </li>
                      <li>
                        <a href="#">At vero eos</a>
                      </li>
                      <li>
                        <a href="#">Consectetur adipiscing</a>
                      </li>
                      <li>
                        <a href="#">Duis aute irure</a>
                      </li>
                      <li>
                        <a href="#">Necessitatibus saepe</a>
                      </li>
                      <li>
                        <a href="#">Maiores alias</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <strong className="text-uppercase">Elements Heading</strong>
                    <ul className="list-unstyled mb-3">
                      <li>
                        <a href="#">Lorem ipsum dolor</a>
                      </li>
                      <li>
                        <a href="#">Sed ut perspiciatis</a>
                      </li>
                      <li>
                        <a href="#">Voluptatum deleniti</a>
                      </li>
                      <li>
                        <a href="#">At vero eos</a>
                      </li>
                      <li>
                        <a href="#">Consectetur adipiscing</a>
                      </li>
                      <li>
                        <a href="#">Duis aute irure</a>
                      </li>
                      <li>
                        <a href="#">Necessitatibus saepe</a>
                      </li>
                      <li>
                        <a href="#">Maiores alias</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <strong className="text-uppercase">Elements Heading</strong>
                    <ul className="list-unstyled mb-3">
                      <li>
                        <a href="#">Lorem ipsum dolor</a>
                      </li>
                      <li>
                        <a href="#">Sed ut perspiciatis</a>
                      </li>
                      <li>
                        <a href="#">Voluptatum deleniti</a>
                      </li>
                      <li>
                        <a href="#">At vero eos</a>
                      </li>
                      <li>
                        <a href="#">Consectetur adipiscing</a>
                      </li>
                      <li>
                        <a href="#">Duis aute irure</a>
                      </li>
                      <li>
                        <a href="#">Necessitatibus saepe</a>
                      </li>
                      <li>
                        <a href="#">Maiores alias</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <strong className="text-uppercase">Elements Heading</strong>
                    <ul className="list-unstyled mb-3">
                      <li>
                        <a href="#">Lorem ipsum dolor</a>
                      </li>
                      <li>
                        <a href="#">Sed ut perspiciatis</a>
                      </li>
                      <li>
                        <a href="#">Voluptatum deleniti</a>
                      </li>
                      <li>
                        <a href="#">At vero eos</a>
                      </li>
                      <li>
                        <a href="#">Consectetur adipiscing</a>
                      </li>
                      <li>
                        <a href="#">Duis aute irure</a>
                      </li>
                      <li>
                        <a href="#">Necessitatibus saepe</a>
                      </li>
                      <li>
                        <a href="#">Maiores alias</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row megamenu-buttons text-center">
                  <div className="col-lg-2 col-md-4">
                    <a
                      href="#"
                      className="d-block megamenu-button-link dashbg-1"
                    >
                      <i className="fa fa-clock-o"></i>
                      <strong>Demo 1</strong>
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-4">
                    <a
                      href="#"
                      className="d-block megamenu-button-link dashbg-2"
                    >
                      <i className="fa fa-clock-o"></i>
                      <strong>Demo 2</strong>
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-4">
                    <a
                      href="#"
                      className="d-block megamenu-button-link dashbg-3"
                    >
                      <i className="fa fa-clock-o"></i>
                      <strong>Demo 3</strong>
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-4">
                    <a
                      href="#"
                      className="d-block megamenu-button-link dashbg-4"
                    >
                      <i className="fa fa-clock-o"></i>
                      <strong>Demo 4</strong>
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-4">
                    <a
                      href="#"
                      className="d-block megamenu-button-link bg-danger"
                    >
                      <i className="fa fa-clock-o"></i>
                      <strong>Demo 5</strong>
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-4">
                    <a
                      href="#"
                      className="d-block megamenu-button-link bg-info"
                    >
                      <i className="fa fa-clock-o"></i>
                      <strong>Demo 6</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="list-inline-item dropdown">
              <a
                id="languages"
                rel="nofollow"
                data-target="#"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                className="nav-link language dropdown-toggle"
              >
                <img src={require("../../img/flags/16/GB.png")} alt="English" />
                <span className="d-none d-sm-inline-block">English</span>
              </a>
              <div aria-labelledby="languages" className="dropdown-menu">
                <a rel="nofollow" href="#" className="dropdown-item">
                  <img
                    src={require("../../img/flags/16/DE.png")}
                    alt="English"
                    className="mr-2"
                  />
                  <span>German</span>
                </a>
                <a rel="nofollow" href="#" className="dropdown-item">
                  <img
                    src={require("../../img/flags/16/FR.png")}
                    alt="English"
                    className="mr-2"
                  />
                  <span>French </span>
                </a>
              </div>
            </div>
            <div className="list-inline-item logout">
              <a id="logout" href="login.html" className="nav-link">
                Logout <i className="icon-logout"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
  }