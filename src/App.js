import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages/Home';
import events from './pages/events';
import join from './pages/join';
import Camps from './pages/Camps';
import Telegram from './pages/Telegram';
import About from './pages/aboutus';
import Downloads from './pages/Downloads';
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";
import SignUp from "./components/Signup"
import { AuthProvider } from "./components/Auth";
function App() {
  return (
    <>
     <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/events' component={events} />
          <Route path='/Camps' component={Camps} />
          <Route path='/join' component={join} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/telegram" component={Telegram} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/Downloads' component={Downloads} />
        </Switch>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
