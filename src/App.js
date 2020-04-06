import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import './Utility.css';
import './Base.css';
import CalendarApp from './CalendarApp/CalendarApp';
import LandingPage from './LandingPage/LandingPage';

function App() {
	return (
		<div className="App">
			<h1>Kodfit</h1>

			<BrowserRouter>
				<Route path="/calendar" exact component={CalendarApp} />
				<Route path="/landing-page" exact component={LandingPage} />
			</BrowserRouter>

		</div>
	);
}

export default App;
