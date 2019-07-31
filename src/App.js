import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/register/Register';
import { Form } from './components/Form';
import { StudentApp } from "./components/Students/StudentApp"

import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/register/Register';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';
import SignIn from './components/signin/SignIn';
import './App.sass';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="App">
      <Navbar isAuthenticated={isAuthenticated} />
      <Switch>
        <Route exact path='/register' component={ Register } />
        <Route exact path='/signin' component={ Form } />
        <Route exact path='/studentform' component = { StudentApp }/>
        <Route exact path='/register' component={Register} />
        <Route exact path='/signin' render={() => <SignIn setAuth={setIsAuthenticated} />} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;