import React from "react";



export default function Content() {
  return (
    <div className="page-content" style={{paddingBottom: "70px"}}>
      <div className="page-header">
        <div className="container-fluid">
          <h2 className="h5 no-margin-bottom"></h2>
        </div>
      </div>
      <section className="no-padding-top no-padding-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="statistic-block block">
                <div className="progress-details d-flex align-items-end justify-content-between">
                  <div className="title">
                    <div className="icon">
                      <i className="icon-user-1"></i>
                    </div>
                    <strong>New Clients</strong>
                  </div>
                  <div className="number dashtext-1">27</div>
                </div>
                <div className="progress progress-template">
                  <div
                    role="progressbar"
                    style={{width: "30%"}}
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    className="progress-bar progress-bar-template dashbg-1"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="statistic-block block">
                <div className="progress-details d-flex align-items-end justify-content-between">
                  <div className="title">
                    <div className="icon">
                      <i className="icon-contract"></i>
                    </div>
                    <strong>New Projects</strong>
                  </div>
                  <div className="number dashtext-2">375</div>
                </div>
                <div className="progress progress-template">
                  <div
                    role="progressbar"
                    style={{width: "70%"}}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    className="progress-bar progress-bar-template dashbg-2"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="statistic-block block">
                <div className="progress-details d-flex align-items-end justify-content-between">
                  <div className="title">
                    <div className="icon">
                      <i className="icon-paper-and-pencil"></i>
                    </div>
                    <strong>New Invoices</strong>
                  </div>
                  <div className="number dashtext-3">140</div>
                </div>
                <div className="progress progress-template">
                  <div
                    role="progressbar"
                    style={{width: "55%"}}
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    className="progress-bar progress-bar-template dashbg-3"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="statistic-block block">
                <div className="progress-details d-flex align-items-end justify-content-between">
                  <div className="title">
                    <div className="icon">
                      <i className="icon-writing-whiteboard"></i>
                    </div>
                    <strong>All Projects</strong>
                  </div>
                  <div className="number dashtext-4">41</div>
                </div>
                <div className="progress progress-template">
                  <div
                    role="progressbar"
                    style={{width: "35%"}}
                    aria-valuenow="35"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    className="progress-bar progress-bar-template dashbg-4"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <footer className="footer">
          <div className="footer__block block no-margin-bottom">
            <div className="container-fluid text-center">
            
               <p className="no-margin-bottom">2018 © Your company. Download From <a target="_blank" href="https://templateshub.net">Templates Hub</a>.</p>
            </div>
          </div>
        </footer>
    </div>
  );
}
