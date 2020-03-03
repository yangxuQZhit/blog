import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ButtonDemo1 from '../reactstrap-demo/buttons/ButtonDemo1';
import ButtonDemo2 from '../reactstrap-demo/buttons/ButtonDemo2';

const ButtonRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <UncontrolledButtonDropdown>
          <DropdownToggle caret>
            Buttons Demo
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <Link to="/buttons/demo1">Demo1</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/buttons/demo2">Demo2</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>

        <Switch>
          <Route path="/buttons/demo1">
            <ButtonDemo1 />
          </Route>
          <Route path="/buttons/demo2">
            <ButtonDemo2 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default ButtonRouter;