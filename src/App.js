import React, { Component } from 'react';
import logo from './logo.svg';
import './app.scss';
import DashboardRoutes from 'component/dashboard';
import Footer from './component/footer';
import Header from './component/header';
import { BrowserRouter } from 'react-router-dom';
import Routes from './route.js';
class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Header />
					<div className="dashboard container">
						<DashboardRoutes />
					</div>
					<Footer />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
