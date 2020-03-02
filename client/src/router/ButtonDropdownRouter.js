import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import ButtonDropdownDemo1 from '../reactstrap-demo/buttondropdown/ButtonDropdownDemo1';

const ButtonDropdownRouter = () => {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  return (
    <BrowserRouter>
      <div>
        <ButtonDropdown isOpen={open} toggle={onToggle}>
          <DropdownToggle caret>
            ButtonDropdown Demo
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <Link to="/buttondropdown/demo1">Demo1</Link>
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>

        <Switch>
          <Route path="/buttondropdown/demo1">
            <ButtonDropdownDemo1 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default ButtonDropdownRouter;