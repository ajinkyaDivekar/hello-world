import React, { Component } from 'react';
import logo from './logo.svg';
import './app.scss';
import DashboardRoutes from 'component/dashboard/index.js';
import Footer from './component/footer.js';
import Header from './component/header.js';
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
