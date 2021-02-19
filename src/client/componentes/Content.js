import React from "react";



export default function Content() {
  return (
    <div className="page-content" style={{paddingBottom: "70px"}}>
      <div className="page-header">
        <div className="container-fluid">
          <h2 className="h5 no-margin-bottom">Dashboard</h2>
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
      {/* <section className="no-padding-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="bar-chart block no-margin-bottom"><div className="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div className="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div className="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                  <canvas id="barChartExample1" width="318" height="159" className="chartjs-render-monitor" style="display: block; height: 212px; width: 425px;"></canvas>
                </div>
                <div className="bar-chart block"><div className="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div className="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div className="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                  <canvas id="barChartExample2" width="318" height="159" className="chartjs-render-monitor" style="display: block; height: 212px; width: 425px;"></canvas>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="line-cahrt block"><div className="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div className="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div className="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                  <canvas id="lineCahrt" width="690" height="345" className="chartjs-render-monitor" style="display: block; height: 460px; width: 921px;"></canvas>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="no-padding-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="stats-2-block block d-flex">
                  <div className="stats-2 d-flex">
                    <div className="stats-2-arrow low"><i className="fa fa-caret-down"></i></div>
                    <div className="stats-2-content"><strong className="d-block">5.657</strong><span className="d-block">Standard Scans</span>
                      <div className="progress progress-template progress-small">
                        <div role="progressbar" style="width: 60%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-template progress-bar-small dashbg-2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="stats-2 d-flex">
                    <div className="stats-2-arrow height"><i className="fa fa-caret-up"></i></div>
                    <div className="stats-2-content"><strong className="d-block">3.1459</strong><span className="d-block">Team Scans</span>
                      <div className="progress progress-template progress-small">
                        <div role="progressbar" style="width: 35%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-template progress-bar-small dashbg-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="stats-3-block block d-flex">
                  <div className="stats-3"><strong className="d-block">745</strong><span className="d-block">Total requests</span>
                    <div className="progress progress-template progress-small">
                      <div role="progressbar" style="width: 35%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-template progress-bar-small dashbg-1"></div>
                    </div>
                  </div>
                  <div className="stats-3 d-flex justify-content-between text-center">
                    <div className="item"><strong className="d-block strong-sm">4.124</strong><span className="d-block span-sm">Threats</span>
                      <div className="line"></div><small>+246</small>
                    </div>
                    <div className="item"><strong className="d-block strong-sm">2.147</strong><span className="d-block span-sm">Neutral</span>
                      <div className="line"></div><small>+416</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="drills-chart block"><div className="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div className="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div className="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                  <canvas id="lineChart1" width="504" height="252" className="chartjs-render-monitor" style="display: block; height: 336px; width: 673px;"></canvas>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="no-padding-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="user-block block text-center">
                  <div className="avatar"><img src="img/avatar-1.jpg" alt="..." className="img-fluid"/>
                    <div className="order dashbg-2">1st</div>
                  </div><a href="#" className="user-title">
                    <h3 className="h5">Richard Nevoreski</h3><span>@richardnevo</span></a>
                  <div className="contributions">950 Contributions</div>
                  <div className="details d-flex">
                    <div className="item"><i className="icon-info"></i><strong>150</strong></div>
                    <div className="item"><i className="fa fa-gg"></i><strong>340</strong></div>
                    <div className="item"><i className="icon-flow-branch"></i><strong>460</strong></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="user-block block text-center">
                  <div className="avatar"><img src="img/avatar-4.jpg" alt="..." className="img-fluid"/>
                    <div className="order dashbg-1">2nd</div>
                  </div><a href="#" className="user-title">
                    <h3 className="h5">Samuel Watson</h3><span>@samwatson</span></a>
                  <div className="contributions">772 Contributions</div>
                  <div className="details d-flex">
                    <div className="item"><i className="icon-info"></i><strong>80</strong></div>
                    <div className="item"><i className="fa fa-gg"></i><strong>420</strong></div>
                    <div className="item"><i className="icon-flow-branch"></i><strong>272</strong></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="user-block block text-center">
                  <div className="avatar"><img src="img/avatar-6.jpg" alt="..." className="img-fluid"/>
                    <div className="order dashbg-4">3rd</div>
                  </div><a href="#" className="user-title">
                    <h3 className="h5">Sebastian Wood</h3><span>@sebastian</span></a>
                  <div className="contributions">620 Contributions</div>
                  <div className="details d-flex">
                    <div className="item"><i className="icon-info"></i><strong>150</strong></div>
                    <div className="item"><i className="fa fa-gg"></i><strong>280</strong></div>
                    <div className="item"><i className="icon-flow-branch"></i><strong>190</strong></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="public-user-block block">
              <div className="row d-flex align-items-center">                   
                <div className="col-lg-4 d-flex align-items-center">
                  <div className="order">4th</div>
                  <div className="avatar"> <img src="img/avatar-1.jpg" alt="..." className="img-fluid"/></div><a href="#" className="name"><strong className="d-block">Tomas Hecktor</strong><span className="d-block">@tomhecktor</span></a>
                </div>
                <div className="col-lg-4 text-center">
                  <div className="contributions">410 Contributions</div>
                </div>
                <div className="col-lg-4">
                  <div className="details d-flex">
                    <div className="item"><i className="icon-info"></i><strong>110</strong></div>
                    <div className="item"><i className="fa fa-gg"></i><strong>200</strong></div>
                    <div className="item"><i className="icon-flow-branch"></i><strong>100</strong></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="public-user-block block">
              <div className="row d-flex align-items-center">                   
                <div className="col-lg-4 d-flex align-items-center">
                  <div className="order">5th</div>
                  <div className="avatar"> <img src="img/avatar-2.jpg" alt="..." className="img-fluid"/></div><a href="#" className="name"><strong className="d-block">Alexander Shelby</strong><span className="d-block">@alexshelby</span></a>
                </div>
                <div className="col-lg-4 text-center">
                  <div className="contributions">320 Contributions</div>
                </div>
                <div className="col-lg-4">
                  <div className="details d-flex">
                    <div className="item"><i className="icon-info"></i><strong>150</strong></div>
                    <div className="item"><i className="fa fa-gg"></i><strong>120</strong></div>
                    <div className="item"><i className="icon-flow-branch"></i><strong>50</strong></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="public-user-block block">
              <div className="row d-flex align-items-center">                   
                <div className="col-lg-4 d-flex align-items-center">
                  <div className="order">6th</div>
                  <div className="avatar"> <img src="img/avatar-6.jpg" alt="..." className="img-fluid"/></div><a href="#" className="name"><strong className="d-block">Arther Kooper</strong><span className="d-block">@artherkooper</span></a>
                </div>
                <div className="col-lg-4 text-center">
                  <div className="contributions">170 Contributions</div>
                </div>
                <div className="col-lg-4">
                  <div className="details d-flex">
                    <div className="item"><i className="icon-info"></i><strong>60</strong></div>
                    <div className="item"><i className="fa fa-gg"></i><strong>70</strong></div>
                    <div className="item"><i className="icon-flow-branch"></i><strong>40</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="margin-bottom-sm">
          <div className="container-fluid">
            <div className="row d-flex align-items-stretch">
              <div className="col-lg-4">
                <div className="stats-with-chart-1 block">
                  <div className="title"> <strong className="d-block">Sales Difference</strong><span className="d-block">Lorem ipsum dolor sit</span></div>
                  <div className="row d-flex align-items-end justify-content-between">
                    <div className="col-5">
                      <div className="text"><strong className="d-block dashtext-3">$740</strong><span className="d-block">May 2017</span><small className="d-block">320 Sales</small></div>
                    </div>
                    <div className="col-7">
                      <div className="bar-chart chart"><div className="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div className="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div className="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                        <canvas id="salesBarChart1" width="177" height="88" className="chartjs-render-monitor" style="display: block; height: 118px; width: 236px;"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">   
                <div className="stats-with-chart-1 block">
                  <div className="title"> <strong className="d-block">Visit Statistics</strong><span className="d-block">Lorem ipsum dolor sit</span></div>
                  <div className="row d-flex align-items-end justify-content-between">
                    <div className="col-4">
                      <div className="text"><strong className="d-block dashtext-1">$457</strong><span className="d-block">May 2017</span><small className="d-block">210 Sales</small></div>
                    </div>
                    <div className="col-8">
                      <div className="bar-chart chart"><div className="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div className="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div className="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                        <canvas id="visitPieChart" width="206" height="102" className="chartjs-render-monitor" style="display: block; height: 137px; width: 275px;"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="stats-with-chart-1 block">
                  <div className="title"> <strong className="d-block">Sales Activities</strong><span className="d-block">Lorem ipsum dolor sit</span></div>
                  <div className="row d-flex align-items-end justify-content-between">
                    <div className="col-5">
                      <div className="text"><strong className="d-block dashtext-2">80%</strong><span className="d-block">May 2017</span><small className="d-block">+35 Sales</small></div>
                    </div>
                    <div className="col-7">
                      <div className="bar-chart chart"><div className="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div className="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div className="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                        <canvas id="salesBarChart2" width="177" height="88" className="chartjs-render-monitor" style="display: block; height: 118px; width: 236px;"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="no-padding-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="checklist-block block">
                  <div className="title"><strong>To Do List</strong></div>
                  <div className="checklist">
                    <div className="item d-flex align-items-center">
                      <input type="checkbox" id="input-1" name="input-1" className="checkbox-template"/>
                      <label htmlFor="input-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</label>
                    </div>
                    <div className="item d-flex align-items-center">
                      <input type="checkbox" id="input-2" name="input-2" checked="" className="checkbox-template"/>
                      <label htmlFor="input-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</label>
                    </div>
                    <div className="item d-flex align-items-center">
                      <input type="checkbox" id="input-3" name="input-3" className="checkbox-template"/>
                      <label htmlFor="input-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</label>
                    </div>
                    <div className="item d-flex align-items-center">
                      <input type="checkbox" id="input-4" name="input-4" className="checkbox-template"/>
                      <label htmlFor="input-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</label>
                    </div>
                    <div className="item d-flex align-items-center">
                      <input type="checkbox" id="input-5" name="input-5" className="checkbox-template"/>
                      <label htmlFor="input-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</label>
                    </div>
                    <div className="item d-flex align-items-center">
                      <input type="checkbox" id="input-6" name="input-6" className="checkbox-template"/>
                      <label htmlFor="input-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">                                           
                <div className="messages-block block">
                  <div className="title"><strong>New Messages</strong></div>
                  <div className="messages"><a href="#" className="message d-flex align-items-center">
                      <div className="profile"><img src="img/avatar-3.jpg" alt="..." className="img-fluid"/>
                        <div className="status online"></div>
                      </div>
                      <div className="content">   <strong className="d-block">Nadia Halsey</strong><span className="d-block">lorem ipsum dolor sit amit</span><small className="date d-block">9:30am</small></div></a><a href="#" className="message d-flex align-items-center">
                      <div className="profile"><img src="img/avatar-2.jpg" alt="..." className="img-fluid"/>
                        <div className="status away"></div>
                      </div>
                      <div className="content">   <strong className="d-block">Peter Ramsy</strong><span className="d-block">lorem ipsum dolor sit amit</span><small className="date d-block">7:40am</small></div></a><a href="#" className="message d-flex align-items-center">
                      <div className="profile"><img src="img/avatar-1.jpg" alt="..." className="img-fluid"/>
                        <div className="status busy"></div>
                      </div>
                      <div className="content">   <strong className="d-block">Sam Kaheil</strong><span className="d-block">lorem ipsum dolor sit amit</span><small className="date d-block">6:55am</small></div></a><a href="#" className="message d-flex align-items-center">
                      <div className="profile"><img src="img/avatar-5.jpg" alt="..." className="img-fluid"/>
                        <div className="status offline"></div>
                      </div>
                      <div className="content">   <strong className="d-block">Sara Wood</strong><span className="d-block">lorem ipsum dolor sit amit</span><small className="date d-block">10:30pm</small></div></a><a href="#" className="message d-flex align-items-center">
                      <div className="profile"><img src="img/avatar-1.jpg" alt="..." className="img-fluid"/>
                        <div className="status online"></div>
                      </div>
                      <div className="content">   <strong className="d-block">Nader Magdy</strong><span className="d-block">lorem ipsum dolor sit amit</span><small className="date d-block">9:47pm</small></div></a></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="stats-with-chart-2 block">
                  <div className="title"><strong className="d-block">Credit Sales</strong><span className="d-block">Lorem ipsum dolor sit</span></div>
                  <div className="piechart chart"><div className="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div className="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div className="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                    <canvas id="pieChartHome1" width="318" height="159" className="chartjs-render-monitor" style="display: block; height: 212px; width: 425px;"></canvas>
                    <div className="text"><strong className="d-block">$2.145</strong><span className="d-block">Sales</span></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="stats-with-chart-2 block">
                  <div className="title"><strong className="d-block">Channel Sales</strong><span className="d-block">Lorem ipsum dolor sit</span></div>
                  <div className="piechart chart"><div className="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div className="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div className="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                    <canvas id="pieChartHome2" width="318" height="159" className="chartjs-render-monitor" style="display: block; height: 212px; width: 425px;"></canvas>
                    <div className="text"><strong className="d-block">$7.784</strong><span className="d-block">Sales</span></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="stats-with-chart-2 block">
                  <div className="title"><strong className="d-block">Direct Sales</strong><span className="d-block">Lorem ipsum dolor sit</span></div>
                  <div className="piechart chart"><div className="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div className="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div className="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                    <canvas id="pieChartHome3" width="318" height="159" className="chartjs-render-monitor" style="display: block; height: 212px; width: 425px;"></canvas>
                    <div className="text"><strong className="d-block">$4.957</strong><span className="d-block">Sales</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
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
