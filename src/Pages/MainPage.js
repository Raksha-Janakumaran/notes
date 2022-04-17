import React from 'react'
import { Link } from 'react-router-dom'
import AQI from '../Assets/AQI.png'
import Weather from '../Assets/Weather.png'
import Sun from '../Assets/Sun.png'

function MainPage() {
  return (
    <div className='container-lg'>
      <div className="row" style={{minHeight:'100vh'}}>
            <div className="col-1 d-flex flex-column align-items-center justify-content-between">
                   <div className="mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="grey" className="bi bi-cloud-sun-fill" viewBox="0 0 16 16">
                            <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/>
                            <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
                        </svg>
                   </div>
                   <Link to="/">
                     <div className="btn btn-danger mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-door-closed-fill" viewBox="0 0 16 16">
                         <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                     </div>
                   </Link>
            </div>


            <div className="col-7">
                  <div className="row" style={{minHeight: '20%'}}>
                      <div className="col-3 d-flex align-items-center justify-content-center">
                         <img src={require('../Assets/avatar.png')} alt="Avatar" className="img-fluid" style={{height:'70%',width:'70%'}}/>
                      </div>
                      <div className="col d-flex align-items-center">   
                        <div>
                            <span style={{color:'darkblue'}} className="h4">Good Morning</span><br/>
                            <span style={{color:'darkblue'}} className="h2">James</span>
                        </div> 
                      </div>   
                  </div>
                  <div className="row pt-2 pb-2" style={{minHeight: '40%'}}>
                      <div className="col-6">
                            <div className="card border-white" style={{height:"100%"}}>
                                <div className="card-body" style={{backgroundImage:`url(${Weather})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', borderRadius:'20px' }}>
                                    <div className="h-100 d-flex flex-column justify-content-between align-items-between">
                                        <div style={{lineHeight: '11pt'}}>
                                            <strong style={{color:'#021C5D',fontSize:'large'}}>Weather</strong><br/>
                                            <strong style={{color:'#021C5D',fontSize:'small'}}><span className="h3">32&deg;C </span></strong><br/>
                                            <strong style={{color:'#021C5D',fontSize:'small'}}>Partly Cloudy</strong><br/>
                                        </div>

                                        <div className="row d-flex flex-row justify-content-around mb-3 ms-1 me-1" style={{width:''}}>
                                            <div className="col-4" style={{lineHeight:'11pt',backgroundColor:'#041031',borderRadius:'5px',padding:'2px',color:'#FFF',width:'30%'}}>
                                                <center style={{paddingTop:'8px',paddingBottom:'8px'}}>
                                                 <strong style={{fontSize:'small'}}>Pressure</strong><br/>
                                                 <strong style={{fontSize:'small'}}>800 Mb</strong>
                                                </center>
                                            </div>
                                            <div className="col-4" style={{lineHeight:'11pt',backgroundColor:'#DFF297',borderRadius:'5px',padding:'2px',width:'30%'}}>
                                                <center style={{paddingTop:'8px',paddingBottom:'8px'}}>
                                                 <strong style={{fontSize:'small'}}>Visibility</strong><br/>
                                                 <strong style={{fontSize:'small'}}>4.3 km</strong>
                                                </center>
                                            </div>
                                            <div className="col-4" style={{lineHeight:'11pt',backgroundColor:'#FFF',borderRadius:'5px',padding:'2px',width:'30%'}}>
                                                <center style={{paddingTop:'8px',paddingBottom:'8px'}}>
                                                 <strong style={{fontSize:'small'}}>Humidity</strong><br/>
                                                 <strong style={{fontSize:'small'}}>87%</strong>
                                                </center>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                      </div>
                      <div className="col-6">
                            <div className="card border-white" style={{height:"100%"}}>
                                <div className="card-body" style={{backgroundImage:`url(${AQI})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', borderRadius:'20px' }}>
                                   <div className="h-100 d-flex align-items-end">
                                     <div style={{lineHeight: '11pt'}}>
                                        <strong style={{color:'#FFF',fontSize:'large'}}>Air Quality Index</strong><br/>
                                        <strong style={{color:'#FFF',fontSize:'small'}}><span className="h3">390 </span>AQI</strong><br/>
                                        <strong style={{color:'#FFF',fontSize:'small'}}>West Wind</strong><br/>
                                     </div>
                                   </div> 
                                </div>
                            </div>
                      </div>
                  </div>

                  <div className="row" style={{minHeight: '40%',display: "block"}}>
                       <span className="h5 mt-2 mb-2">Tasks : Today</span><br/><br/>
                       <div class="card d-block" style={{display: "block",width:'95%',color:'#021C5D'}}>
                            <div class="card-body">
                                <div className="row">
                                    <div className='col'>
                                        <strong>
                                        <span>Shopping</span><br/>
                                        <span>From: 05/03/2022</span>
                                        </strong>
                                    </div>
                                    <div className='col-4 d-flex justify-content-around align-items-center'>Mark As Done</div>
                                </div>
                            </div>
                        </div>
                  </div>
            </div>


            <div className="col-4 py-3">
                <div class="card" style={{height:'100%',backgroundColor:'#DFF297'}}>
                    <div class="card-body d-flex flex-column justify-content-around">
                          <div id="statussection">
                               <span class="h4">Status</span><br/>
                               <span style={{color:'#021C5D'}}>
                                    <span>Total: 58</span><br/>
                                    <span>Pending: 30</span><br/>
                                    <span>Priority: 10</span>
                               </span>
                          </div>

                          <div id="disasterinfo">
                                <span class="h4">Disaster Info</span><br/>
                                <div class="card mt-2">
                                    <div class="card-body text-center text-danger">
                                         <strong className="h5"> Cyclone Alert </strong>
                                    </div>
                                </div>
                          </div>

                          <div id="forecast">
                                <span class="h4">Next two Days</span><br/>
                                <div class="card">
                                    <div class="card-body" style={{padding:'0'}}>
                                         <div className="row d-flex align-items-center">
                                              <div class="col-3">
                                                  <img src={require('../Assets/Sun.png')}  className="img-fluid" style={{height:'40%',aspectRatio:'1'}}/>
                                              </div>
                                              <div class="col d-flex flex-column" style={{lineHeight:'11pt'}}>
                                                  <span style={{fontSize:'x-small'}}>March 6</span>
                                                  <span className="fs-5">Sunny</span>
                                              </div>
                                              <div class="col-4 fs-4 text-warning d-flex align-items-center">
                                                  32&deg; C
                                              </div>
                                         </div>
                                    </div>
                                </div>
                                <div class="card mt-2">
                                    <div class="card-body" style={{padding:'0'}}>
                                         <div className="row d-flex align-items-center">
                                              <div class="col-3">
                                                  <img src={require('../Assets/Cloud.png')}  className="img-fluid ms-2" style={{height:'40%',width:'70%'}}/>
                                              </div>
                                              <div class="col d-flex flex-column" style={{lineHeight:'11pt'}}>
                                                  <span style={{fontSize:'x-small'}}>March 7</span>
                                                  <span className="fs-5">Cloudy</span>
                                              </div>
                                              <div class="col-4 fs-4 text-warning d-flex align-items-center">
                                                  26&deg; C
                                              </div>
                                         </div>
                                    </div>
                                </div>
                          </div>

                          <div id="UVIinfo">
                                <span class="h4">UVI</span><br/>
                                <div class="card mt-2">
                                    <div class="card-body">
                                         <strong className="h5"> 20 UVI </strong><br/>
                                         <strong className="h5">Moderate</strong>
                                    </div>
                                </div>
                          </div>

                    </div>
                </div>
            </div>       
      </div>
    </div>
  )
}

export default MainPage