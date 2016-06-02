import React, { Component } from 'react'
import './map.scss'



var h3Style = {
  display: 'inline'
};
var greenBack ={
  color: 'yellowgreen'
};
var whiteBack = {
  background: 'white'
};

{/*var map = new <GMaps el='#map'
                  lat='-12.043333'
                  lng='-77.028333'/>;
                
                map.addMarker({
                lat: -12.043333,
                lng: -77.028333,
                title: 'Cat1',
                click: function() {
                  alert('You clicked in this marker');
                }
              });
              

              path = [[-12.044012922866312, -77.02470665341184], [-12.05449279282314, -77.03024273281858], [-12.055122327623378, -77.03039293652341], [-12.075917129727586, -77.02764635449216], [-12.07635776902266, -77.02792530422971], [-12.076819390363665, -77.02893381481931], [-12.088527520066453, -77.0241058385925], [-12.090814532191756, -77.02271108990476]];

              map.drawPolyline({
                path: path,
                strokeColor: '#131540',
                strokeOpacity: 0.6,
                strokeWeight: 6
              });


              var path = [[-12.040397656836609,-77.03373871559225], [-12.040248585302038,-77.03993927003302], [-12.050047116528843,-77.02448169303511], [-12.044804866577001,-77.02154422636042]];

map.drawPolygon({
                paths: path,
                strokeColor: '#BBD8E9',
                strokeOpacity: 1,
                strokeWeight: 3,
                fillColor: '#BBD8E9',
                fillOpacity: 0.6
              });


              map.addControl({
                    position: 'top_center',
                    content: 'Geolocate',
                    style: {
                      margin: '5px',
                      padding: '1px 6px',
                      border: 'solid 1px #717B87',
                      background: '#fff'
                    },
                    events: {
                      click: function(){
                        GMaps.geolocate({
                          success: function(position){
                            map.setCenter(position.coords.latitude, position.coords.longitude);
                          },
                          error: function(error){
                            alert('Geolocation failed: ' + error.message);
                          },
                          not_supported: function(){
                            alert('Your browser does not support geolocation');
                          }
                        });
                      }
                    }
                  });
var $ = window.jQuery;
function DropDown(el) {
 this.dd = el;
 this.placeholder = this.dd.children('span');
 this.opts = this.dd.find('ol.dropdown > li');
 this.val = '';
 this.index = -1;
 this.initEvents();
}
DropDown.prototype = {
 initEvents : function() {
 var obj = this;

 obj.dd.on('click', function(){
 $(this).toggleClass('active');
 return false;
 });

 obj.opts.on('click',function(){
 var opt = $(this);
 obj.val = opt.text();
 obj.index = opt.index();
 obj.placeholder.text('Gender: ' + obj.val);
 });
 },
 getValue : function() {
 return this.val;
 },
 getIndex : function() {
 return this.index;
 }
}*/}

export default class Maps extends Component {
  render() {
    return (
      <div>
            
          <div className='container'>
            

              <div className='collection-item-outer'><h3 id='dev'>Мої улюбленці: </h3>

                  <div className='collection-text'>

                    <h3 data-toggle='collapse' data-target='#demo1'>Коти</h3>
                    <div id='demo1' className='collapse in'>
                        <ul className='c7 lst-kix_jrks0qagomgn-0 start'>
                            
                            
                          <li>
                            <div className='dropdown'>
                              <label> <h3 style={h3Style}> <input type='checkbox' value=''></input> </h3> </label>
                              <button data-toggle='dropdown' className='dropdown-toggle' style={whiteBack}>
                                <h3 style={h3Style}>Кіт<label><b className='caret' style={greenBack}></b></label>
                                </h3>
                              </button>
                            
                              <ul className='dropdown-menu'>
                                <li><a href='#'>ID</a></li>
                                <li><a href='#'> Name</a></li>
                                <li><a href='#'> ON/OFF</a></li>
                                <li><a href='#'> Frequency</a></li>
                                <li><a href='#'> Geozone</a></li>
                            </ul>
                            </div>
                          </li>

                          <li><div className='dropdown'><label><h3 style={h3Style}><input type='checkbox' value=''/></h3></label>
                              <button data-toggle='dropdown' className='dropdown-toggle' style={whiteBack}><h3 style={h3Style}>Кіт2<label><b className='caret' style={greenBack}></b></label></h3></button>
                            
                              <ul className='dropdown-menu'>
                                <li><a href='#'>ID</a></li>
                                <li><a href='#'> Name</a></li>
                                <li><a href='#'> ON/OFF</a></li>
                                <li><a href='#'> Frequency</a></li>
                                <li><a href='#'> Geozone</a></li>
                            </ul>
                            </div>
                          </li>
                          
                          
                          <div className='dropdown'><input type='checkbox' value=''/>
                             <button className='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown'><label> Cat        <b className='caret'></b></label>
                            </button>
                            <ul className='dropdown-menu'>
                             <li><a href='#'>ID</a></li>
                             <li><a href='#'>Name</a></li>
                             <li><a href='#'>ON/OFF</a></li>
                             <li><a href='#'>Frequency</a></li>
                             <li><a href='#'>Geozone</a></li>
                            </ul>
                          </div>
              
                        </ul>
                    </div>



                    <h3 data-toggle='collapse' data-target='#demo2'>Собаки</h3>
                    <div id='demo2' className='collapse in'>
                    <ul className='c7 lst-kix_jrks0qagomgn-0 start'>
                        
                        
                      <li><div className='dropdown'><label><h3 style={h3Style}><input type='checkbox' value=''/></h3></label>
                          <button data-toggle='dropdown' className='dropdown-toggle' style={whiteBack}><h3 style={h3Style}>Пес<label><b className='caret' style={greenBack}></b></label></h3></button>
                        
                          <ul className='dropdown-menu'>
                            <li><a href='#'>ID</a></li>
                            <li><a href='#'> Name</a></li>
                            <li><a href='#'> ON/OFF</a></li>
                            <li><a href='#'> Frequency</a></li>
                            <li><a href='#'> Geozone</a></li>
                        </ul>
                        </div>
                      </li>

                      <li><div className='dropdown'><label><h3 style={h3Style}><input type='checkbox' value=''/></h3></label>
                          <button data-toggle='dropdown' className='dropdown-toggle' style={whiteBack}><h3 style={h3Style}>Пес2<label><b className='caret' style={greenBack}></b></label></h3></button>
                        
                          <ul className='dropdown-menu'>
                            <li><a href='#'>ID</a></li>
                            <li><a href='#'> Name</a></li>
                            <li><a href='#'> ON/OFF</a></li>
                            <li><a href='#'> Frequency</a></li>
                            <li><a href='#'> Geozone</a></li>
                        </ul>
                        </div>
                      </li>
                      
                      
                    </ul>
                    </div>
                    <button type='button' className='btn btn-primary'><b> Додати групу </b></button>



                  </div>

              </div>
              
                <div className='map'>
                  <div id='map'></div>
                    
                </div>

            
          </div>
  
      </div>
    )
  }
}
