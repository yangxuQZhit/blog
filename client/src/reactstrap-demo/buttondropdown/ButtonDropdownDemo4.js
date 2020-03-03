import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ButtonDropdownDemo4 = props => {
  const [dropUp, setDropUp] = useState(false);
  const onToggleUp = () => setDropUp(!dropUp);
  const [dropLeft, setDropLeft] = useState(false);
  const onToggleLeft = () => setDropLeft(!dropLeft);
  const [dropRight, setDropRight] = useState(false);
  const onToggleRight = () => setDropRight(!dropRight);
  return (
    <div>
      <ButtonDropdown direction="up" isOpen={dropUp} toggle={onToggleUp}>
        <DropdownToggle caret>
          Dropup
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>

      <ButtonDropdown direction="left" isOpen={dropLeft} toggle={onToggleLeft}>
        <DropdownToggle caret>
          Dropleft
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>

      <ButtonDropdown direction="right" isOpen={dropRight} toggle={onToggleRight}>
        <DropdownToggle caret>
          Dropright
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  ); 
}

export default ButtonDropdownDemo4;