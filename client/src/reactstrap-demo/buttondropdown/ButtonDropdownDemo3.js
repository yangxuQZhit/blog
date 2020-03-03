import React from 'react';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ButtonDropdownDemo3 = props => {
  return (
    <UncontrolledButtonDropdown>
      <DropdownToggle caret>Dropdown</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown>
  );
}

export default ButtonDropdownDemo3;