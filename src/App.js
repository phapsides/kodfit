import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import CalendarApp from './CalendarApp/CalendarApp';

function App() {
  return (
    <div className="App">
        <h1>Kodfit</h1>

        <BrowserRouter>
          <Route path="/calendar" exact component={CalendarApp} />
        </BrowserRouter>


    </div>
  );
}

export default App;
