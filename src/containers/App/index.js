import React, { Component } from 'react'
import NavLink from '../../components/NavLink'

export default class App extends Component {
  render() {
    return (
    <div>
      <div className='page-navigation1'>
        <div className='container'>
            <ul>
              <li><NavLink onlyActiveOnIndex={true} to='/'>Головна</NavLink></li>
              <li><NavLink to='/maps'>Мапа</NavLink></li>
              <li><NavLink to='/archive'>Архів</NavLink></li>
              <li><NavLink to='/medcard'>Щоденник</NavLink></li>
              <li><NavLink to='/vet'>Ветеринар</NavLink></li>
              <li><NavLink to='/admin'>Admin</NavLink></li>
            </ul>
            
            <p className='loginout'>
            <button type='button' className='btn btn-primary navbar-btn btn-lg' href='#signin' data-toggle='modal' data-target='.bs-modal-sm'>Увійти / Зареєструватись</button>
            </p>
            
        </div>
      </div>
      <div className='modal fade bs-modal-sm' id='myModal' tabindex='-1' role='dialog' aria-labelledby='mySmallModalLabel' aria-hidden='true'>
            <div className='modal-dialog modal-sm'>
              <div className='modal-content'>
                  
                  <div className='bs-example bs-example-tabs'>
                    <button type='button' className='close' data-dismiss='modal' aria-hidden='true'> × </button>
                      <ul id='myTab' className='nav nav-tabs'>
                        <li className='active'><a href='#signin' data-toggle='tab'>Увійти</a></li>
                        <li className=''><a href='#signup' data-toggle='tab'>Реєстрація</a></li>
                        
                      </ul>
                  </div>
                <div className='modal-body'>
                    <div id='myTabContent' className='tab-content'>
                      
                      <div className='tab-pane fade active in' id='signin'>


                      <form className='form-signin'>
                          <h2 className='form-signin-heading'>Будь ласка, увійдіть</h2>
                            <label for='inputEmail' className='sr-only'>Email адреса</label>
                            <input type='email' id='inputEmail' className='form-control' placeholder='Email адреса' required autofocus/>
                          <br/>
                          
                            <label for='inputPassword' className='sr-only'>Пароль</label>
                            <input type='password' id='inputPassword' className='form-control' placeholder='Пароль' required/>
                          
                          <div className='checkbox'>
                            <label>
                              <input type='checkbox' value='remember-me'></input> Запам'ятати мене</label>
                          </div>
                          <button className='btn btn-lg btn-primary btn-block' type='submit'>Увійти</button>
                    </form>


                    <div className='social-login'>
                                  <h3>...або використвуючи:</h3>
                                  <div className='social-login-buttons'>
                                  <a className='btn btn-link-1 btn-link-1-facebook' href='#'>
                                      <i className='fa fa-facebook'></i> Facebook
                                  </a>
                                  <a className='btn btn-link-1 btn-link-1-twitter' href='#'>
                                      <i className='fa fa-twitter'></i> Twitter
                                  </a>
                                  <a className='btn btn-link-1 btn-link-1-google-plus' href='#'>
                                      <i className='fa fa-google-plus'></i> Google Plus
                                  </a>
                                  </div>
                          </div>
                      </div>
                    
                      <div className='tab-pane fade' id='signup'>
                          <form className='form-horizontal'>
                          <fieldset>
                          <h2 className='form-signin-heading'>Реєстрація</h2>
                          
                          <div className='control-group'>
                            
                            <div className='controls'>
                              <input id='userid' name='userid' className='form-control' type='text' placeholder='Ім&acute;я користувача' className='input-large' required=''/>
                            </div>
                          </div>
                          <br/>

                          <div className='control-group'>
                            <div className='controls'>
                              <input id='firstname' name='firstname' className='form-control' type='text' placeholder='Ім&acute;я' className='input-large' required=''/>
                            </div>
                          </div>
                          <br/>

                          <div className='control-group'>
                            
                            <div className='controls'>
                              <input id='lastname' name='lastname' className='form-control' type='text' placeholder='Прізвище' className='input-large' required=''/>
                            </div>
                          </div>
                          <br/>
                          
                          <div className='control-group'>
                            
                            <div className='controls'>
                              <input id='Email' name='Email' className='form-control' type='email' placeholder='Email адреса' className='input-large' required=''/>
                            </div>
                          </div>
                          <br/>
                          
                          
                          <div className='control-group'>
                            
                            <div className='controls'>
                              <input id='password' name='password' className='form-control' type='password' placeholder='Пароль' className='input-large' required=''/>
                              <center><em>1-8 символів</em></center>
                            </div>
                          </div>
                          <br/>
                          
                          
                          <div className='control-group'>
                            <div className='controls'>
                              <input id='reenterpassword' className='form-control' name='reenterpassword' type='password' placeholder='Повторіть пароль' className='input-large' required=''/>
                            </div>
                          </div>
                          
                          
                          <div className='control-group'>
                            
                            <hr/>
                            <div className='controls'>
                              <button id='confirmsignup' name='confirmsignup' className='btn btn-lg btn-primary btn-block' type='submit'>Зареєструватись</button>
                            </div>
                          </div>
                          </fieldset>
                          </form>
                      </div>
                  </div>
                </div>
                  
              </div>
          </div>
        </div>

        {this.props.children}

        {/*<footer className='footer'>
      <a href='https://github.com/' className='button'><small>View project on</small> GitHub</a>
      <div className='container'>
        <p>Copyright © 2016 Alina&amp;Alyona Vitiuk</p>
      </div>
    </footer>*/}
      </div>
              
        
    )
  }
}
