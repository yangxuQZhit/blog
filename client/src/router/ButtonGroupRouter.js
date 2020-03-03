import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ButtonGroupDemo1 from '../reactstrap-demo/buttongroup/ButtonGroupDemo1';

const ButtonGroupRouter = () => {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  return (
    <BrowserRouter>
      <div>
        <ButtonDropdown isOpen={open} toggle={onToggle}>
          <DropdownToggle caret>ButtonGroup Demo</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <Link to="/buttongroup/demo1">Demo1</Link>
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>

        <Switch>
          <Route path="/buttongroup/demo1">
            <ButtonGroupDemo1 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default ButtonGroupRouter;