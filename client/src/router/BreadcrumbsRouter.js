import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import BreadcrumbsDemo1 from '../reactstrap-demo/breadcrumbs/BreadcrumbsDemo1';
import BreadcrumbsDemo2 from '../reactstrap-demo/breadcrumbs/BreadcrumbsDemo2';

const BreadcrumbsRouter = () => {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  return (
    <BrowserRouter>
      <div>
        <ButtonDropdown isOpen={open} toggle={onToggle}>
          <DropdownToggle caret>
            Breadcrumbs Demo
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <Link to="/breadcrumbs/demo1">Demo1</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/breadcrumbs/demo2">Demo2</Link>
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>

        <Switch>
          <Route path="/breadcrumbs/demo1">
            <BreadcrumbsDemo1 />
          </Route>
          <Route path="/breadcrumbs/demo2">
            <BreadcrumbsDemo2 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default BreadcrumbsRouter;
