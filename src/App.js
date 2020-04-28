import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';

import { CssBaseline } from '@material-ui/core';


export default function App() {
  return (
    <BrowserRouter>
    <>
      <CssBaseline />
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route component={Error}/>
      </Switch>
      <Footer />
    </> 
  </BrowserRouter>
  );
}
