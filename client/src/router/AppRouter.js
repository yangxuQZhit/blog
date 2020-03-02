// 'use strict';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AlertDemo1 from '../reactstrap-demo/alert/AlertDemo1';
import AlertDemo2 from '../reactstrap-demo/alert/AlertDemo2';
import AlertDemo3 from '../reactstrap-demo/alert/AlertDemo3';
import AlertDemo4 from '../reactstrap-demo/alert/AlertDemo4';
import AlertDemo5 from '../reactstrap-demo/alert/AlertDemo5';
import AlertDemo6 from '../reactstrap-demo/alert/AlertDemo6';
import BadgesDemo1 from '../reactstrap-demo/badges/BadgesDemo1';
import BadgesDemo2 from '../reactstrap-demo/badges/BadgesDemo2';
import BadgesDemo3 from '../reactstrap-demo/badges/BadgesDemo3';
import BadgesDemo4 from '../reactstrap-demo/badges/BadgesDemo4';
import BadgesDemo5 from '../reactstrap-demo/badges/BadgesDEmo5';
import BreadcrumbsDemo1 from '../reactstrap-demo/breadcrumbs/BreadcrumbsDemo1';
import BreadcrumbsDemo2 from '../reactstrap-demo/breadcrumbs/BreadcrumbsDemo2';
import ButtonDropdownDemo1 from '../reactstrap-demo/buttondropdown/ButtonDropdownDemo1';

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
            <li>
              <Link to="/badges/demo1">BadgesDemo1</Link>
            </li>
            <li>
              <Link to="/badges/demo2">BadgesDemo2</Link>
            </li>
            <li>
              <Link to="/badges/demo3">BadgesDemo3</Link>
            </li>
            <li>
              <Link to="/badges/demo4">BadgesDemo4</Link>
            </li>
            <li>
              <Link to="/badges/demo5">BadgesDemo5</Link>
            </li>
            <li>
              <Link to="/breadcrumbs/demo1">BreadcrumbsDemo1</Link>
            </li>
            <li>
              <Link to="/breadcrumbs/demo2">BreadcrumbsDemo2</Link>
            </li>
            <li>
              <Link to="/buttondropdown/demo1">ButtonDropdownDemo1</Link>
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
          <Route path="/badges/demo1">
            <BadgesDemo1 />
          </Route>
          <Route path="/badges/demo2">
            <BadgesDemo2 />
          </Route>
          <Route path="/badges/demo3">
            <BadgesDemo3 />
          </Route>
          <Route path="/badges/demo4">
            <BadgesDemo4 />
          </Route>
          <Route path="/badges/demo5">
            <BadgesDemo5 />
          </Route>
          <Route path="/breadcrumbs/demo1">
            <BreadcrumbsDemo1 />
          </Route>
          <Route path="/breadcrumbs/demo2">
            <BreadcrumbsDemo2 />
          </Route>
          <Route path="/buttondropdown/demo1">
            <ButtonDropdownDemo1 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;