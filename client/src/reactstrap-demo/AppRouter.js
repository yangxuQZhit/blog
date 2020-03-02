'use strict';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AlertDemo1 from './alert/AlertDemo1';
import AlertDemo2 from './alert/AlertDemo2';
import AlertDemo3 from './alert/AlertDemo3';
import AlertDemo4 from './alert/AlertDemo4';
import AlertDemo5 from './alert/AlertDemo5';
import AlertDemo6 from './alert/AlertDemo6';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/alert/demo1">AlertDemo1</Link>
            </li>
            <li>
              <Link to="/alert/demo2">AlertDemo2</Link>
            </li>
            <li>
              <Link to="/alert/demo3">AlertDemo3</Link>
            </li>
            <li>
              <Link to="/alert/demo4">AlertDemo4</Link>
            </li>
            <li>
              <Link to="/alert/demo5">AlertDemo5</Link>
            </li>
            <li>
              <Link to="/alert/demo6">AlertDemo6</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/alert/demo1">
            <AlertDemo1 />
          </Route>
          <Route path="/alert/demo2">
            <AlertDemo2 />
          </Route>
          <Route path="/alert/demo3">
            <AlertDemo3 />
          </Route>
          <Route path="/alert/demo4">
            <AlertDemo4 />
          </Route>
          <Route path="/alert/demo5">
            <AlertDemo5 />
          </Route>
          <Route path="/alert/demo6">
            <AlertDemo6 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;