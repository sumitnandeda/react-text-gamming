import React, {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('dark');

  return (
    <>
    <Router>
    <Navbar title="TextChange" mode={mode}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
             <TextForm heading="Enter text to analyze below" />
          </Route>
        </Switch>
    </div>
    </Router>
    </>
    
  );
}

export default App;
