// 'use strict';
import React from 'react';
import { Button, Badge } from 'reactstrap';

const BadgesDemo2 = props => {
  return (
    <div>
      <Button color="primary" outline>
        Notifications <Badge color="secondary">4</Badge>
      </Button>
    </div>
  );
}

export default BadgesDemo2;