import React, { Component } from 'react'
import './style.scss'

export default class Home extends Component {
showText (el) {
	if(el.previousElementSibling.clientHeight === 80) {
		el.previousElementSibling.style.height = '100%';
		el.innerHTML = 'Згорнути...';
	} else {
		el.previousElementSibling.style.height = '80px';
		el.innerHTML = 'Розгорнути...';
	}
}
  render() {
    return (
      <div className='row'>
        <div className='col-md-12'><header className='header'>

				<img id='img1' src='images/9_parrot.jpg' alt='picture' width='' height=''/>
				<img id='img2' src='images/New.jpg' alt='picture' width='' height=''/>
			
				<div className='collections'>

					<h1>Main Header Here</h1>
					<h2>
						<small>And small sub header</small>
					</h2>
					

					<div className='collection-text'>
								
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</p>
								<button onclick='showText(this)' className='btn-primary'>Розгорнути...</button>
							
					</div>		
				</div>
			</header>
        </div>

       </div>
       
    )
  }
}

