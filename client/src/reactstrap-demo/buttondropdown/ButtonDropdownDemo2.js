import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ButtonDropdownDemo2 = props => {
  const [openlg, setOpenlg] = useState(false);
  const onTogglelg = () => setOpenlg(!openlg);
  const [opensm, setOpensm] = useState(false);
  const onTogglesm = () => setOpensm(!opensm);
  return (
    <div>
      <ButtonDropdown isOpen={openlg} toggle={onTogglelg}>
        <DropdownToggle caret size="lg">Large Button</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>

      <ButtonDropdown isOpen={opensm} toggle={onTogglesm}>
        <DropdownToggle caret size="sm">Small Button</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  );
}

export default ButtonDropdownDemo2;