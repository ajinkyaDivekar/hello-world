import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {MyContext} from '../NewThings/ContextApi/MyContext';
class Header extends Component {
	render() {
		console.log(this.context,'from header');
		
		return (
			<div className="header-container">
				<nav className="navbar navbar-expand-lg navbar-light">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
                <Link to='/home'>Home</Link>
							</li>
							<li className="nav-item">
                  <Link to='/about'>About</Link>
							</li>
							<li className="nav-item">
                  <Link to='/contact'>Contact</Link>
							</li>
							<li className="nav-item">
                  <Link to='/hooks'>Hooks</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

Header.contextType = MyContext;

export default Header;
