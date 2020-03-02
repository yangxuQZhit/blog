import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AlertDemo1 from '../reactstrap-demo/alert/AlertDemo1';
import AlertDemo2 from '../reactstrap-demo/alert/AlertDemo2';
import AlertDemo3 from '../reactstrap-demo/alert/AlertDemo3';
import AlertDemo4 from '../reactstrap-demo/alert/AlertDemo4';
import AlertDemo5 from '../reactstrap-demo/alert/AlertDemo5';
import AlertDemo6 from '../reactstrap-demo/alert/AlertDemo6';

const AlertRouter = () => {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  return (
    <BrowserRouter>
      <div>
        <ButtonDropdown isOpen={open} toggle={onToggle}>
          <DropdownToggle caret>
            Alert Demos
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <Link to="/alert/demo1">AlertDemo1</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/alert/demo2">AlertDemo2</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/alert/demo3">AlertDemo3</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/alert/demo4">AlertDemo4</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/alert/demo5">AlertDemo5</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/alert/demo6">AlertDemo6</Link>
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>

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
}

export default AlertRouter;