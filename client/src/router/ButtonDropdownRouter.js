import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import ButtonDropdownDemo1 from '../reactstrap-demo/buttondropdown/ButtonDropdownDemo1';
import ButtonDropdownDemo2 from '../reactstrap-demo/buttondropdown/ButtonDropdownDemo2';
import ButtonDropdownDemo3 from '../reactstrap-demo/buttondropdown/ButtonDropdownDemo3';
import ButtonDropdownDemo4 from '../reactstrap-demo/buttondropdown/ButtonDropdownDemo4';

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
            <DropdownItem>
              <Link to="/buttondropdown/demo2">Demo2</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/buttondropdown/demo3">Demo3</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/buttondropdown/demo4">Demo4</Link>
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>

        <Switch>
          <Route path="/buttondropdown/demo1">
            <ButtonDropdownDemo1 />
          </Route>
          <Route path="/buttondropdown/demo2">
            <ButtonDropdownDemo2 />
          </Route>
          <Route path="/buttondropdown/demo3">
            <ButtonDropdownDemo3 />
          </Route>
          <Route path="/buttondropdown/demo4">
            <ButtonDropdownDemo4 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default ButtonDropdownRouter;