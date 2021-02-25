import React from 'react'

const ContentHistorial = (props) => {
    return(
    <div className="page-content" style={{paddingBottom: "70px"}}>
    <div className="page-header">
      <div className="container-fluid">
        <h2 className="h4 no-margin-bottom">{props.title}</h2>
      </div>
    </div>
      <footer className="footer">
        <div className="footer__block block no-margin-bottom">
          <div className="container-fluid text-center">
          
             <p className="no-margin-bottom">2018 © Your company. Download From <a target="_blank" href="#">Templates Hub</a>.</p>
          </div>
        </div>
      </footer>
  </div>
    )
}
export default ContentHistorial;