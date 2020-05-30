import React from 'react';
// Components
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
// Pages
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contacts from './components/pages/Contacts';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';

import { Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/news' component={News} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/details' component={Details} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}
