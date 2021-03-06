import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import {Provider} from './context';

function App() {
  return (
    <Provider>
    <Router>
      <React.Fragment>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact="/" component={Index}/>
          </Switch>
        </div>
      </React.Fragment>
    </Router>
      </Provider>
  );
}

export default App;
