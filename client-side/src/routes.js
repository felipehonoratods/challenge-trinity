import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Navbar from './components/layout/Navbar';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';

export default function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/add" component={AddUser} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route exact path="/users/:id" component={User} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}