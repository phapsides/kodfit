import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import CalendarApp from './CalendarApp/CalendarApp';

function App() {
  return (
    <div className="App">
        <h1>Kodfit</h1>

        <Router>
          <Route path="/calendar" exact component={CalendarApp} />
        </Router>


    </div>
  );
}

export default App;
