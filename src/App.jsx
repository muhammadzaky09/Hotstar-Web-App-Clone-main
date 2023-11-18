import React from 'react';
import { BrowserRouter,Switch , Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import Detail from './components/Detail';
import Login from './components/Login';
import './App.css';
import Registration from './components/Registration';



function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route path='/detail/:id'>
          <Detail />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Registration />
        </Route>
        <Redirect to="/" /> 
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
