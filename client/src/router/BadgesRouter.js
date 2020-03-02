import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import BadgesDemo1 from '../reactstrap-demo/badges/BadgesDemo1';
import BadgesDemo2 from '../reactstrap-demo/badges/BadgesDemo2';
import BadgesDemo3 from '../reactstrap-demo/badges/BadgesDemo3';
import BadgesDemo4 from '../reactstrap-demo/badges/BadgesDemo4';
import BadgesDemo5 from '../reactstrap-demo/badges/BadgesDemo5';

const BadgesRouter = () => {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  return (
    <BrowserRouter>
      <div>
        <ButtonDropdown isOpen={open} toggle={onToggle}>
          <DropdownToggle caret>
            Badges Demo
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <Link to="/badges/demo1">Demo1</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/badges/demo2">Demo2</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/badges/demo3">Demo3</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/badges/demo4">Demo4</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/badges/demo5">Demo5</Link>
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>

        <Switch>
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
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default BadgesRouter;