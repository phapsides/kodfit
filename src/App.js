import React from 'react';
import './App.css';
import './Utility.css';
import './Base.css';
import './Typography.css';
import './Buttons.css';
import PageView from './PageView/PageView';
import Logo from './Logo/Logo';

function App() {
	return (
			<div className="App">
				<Logo />
				<PageView />
			</div>
	);
}
export default App;
