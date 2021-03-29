import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import './index.css';
// import './pages/about.css';
import reportWebVitals from './reportWebVitals';
import Contact from './pages/contact';
import Login from './pages/login';
import Header from './components/header/header'
import SignIn from './pages/signIn';
import Footer from './components/footer/footer';
import Accueil from './pages/accueil';
import About from './pages/about';
import Welcome from './pages/welcome';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/accueil" component={Accueil}/>
        <Route path="/login" component={Login}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/inscription" component={SignIn}/>
        <Route path="/">
          <Welcome/>
        </Route>
        <Route path="/*">
          <Redirect to={{pathname: "/error"}}/>
        </Route>
      </Switch>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
