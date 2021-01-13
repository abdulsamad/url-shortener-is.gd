import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Form from './components/layout/Form';
import List from './components/layout/list/List';
import Footer from './components/layout/Footer';
import './scss/App.scss';

function App() {
	useEffect(() => {
		if (localStorage.getItem('theme')) {
			document.body.className = localStorage.getItem('theme');
		}
	}, []);

	return (
		<BrowserRouter basename='/url_shortener_is.gd'>
			<div className='App'>
				<Navbar title='URL Shortener' />
				<div className='container'>
					<Form />
					<Switch>
						<Redirect exact from='/' to='/1' />
						<Route exact from='/:page' component={List} />
					</Switch>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
