import React, { useState } from 'react';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button} from 'reactstrap';

const ButtonDropdownDemo1 = props => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <Button id="caret" color="primary">Button Dropdown</Button>
      <DropdownToggle caret color="primary"></DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default ButtonDropdownDemo1;