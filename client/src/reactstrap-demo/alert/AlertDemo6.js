'use strict';
import React from 'react';
import { UncontrolledAlert } from 'reactstrap';

const AlertDemo6 = props => {
  return (
    <div>
      <UncontrolledAlert color="info">
        I am an alert and I can be dismissed!
      </UncontrolledAlert>
      <UncontrolledAlert color="info" fade={false}>
        I am an alert and I can be dismissed without animating!
      </UncontrolledAlert>
    </div>
  );
};

export default AlertDemo6;