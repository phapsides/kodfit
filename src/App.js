import React from 'react';
import BottomNavBar from './BottomNavBar/BottomNavBar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './Utility.css';
import './Base.css';
import CalendarApp from './CalendarApp/CalendarApp';
import LandingPage from './LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
          <h1>Welcome to Kodfit!!!</h1>
          <Route path="/calendar" exact component={CalendarApp} />
		  <Route path="/landing-page" exact component={LandingPage} />
          <BottomNavBar />
      </div>
    </Router>
  );
}

export default App;
