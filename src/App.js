import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import CalendarApp from './CalendarApp/CalendarApp';
import Timer from './Timer/Timer';

function App() {
  return (
    <div className="App">
        <h1>Kodfit</h1>

        <BrowserRouter>
          <Route path="/calendar" exact component={CalendarApp} />
          <Route path="/timer" exact component={Timer} />
        </BrowserRouter>


    </div>
  );
}

export default App;
