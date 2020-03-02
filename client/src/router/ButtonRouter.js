import React from 'react';
import AlertRouter from './AlertRouter';
import BadgesRouter from './BadgesRouter';
import BreadcrumbsRouter from './BreadcrumbsRouter';
import ButtonDropdownRouter from './ButtonDropdownRouter';

const ButtonRouter = () => {
  return (
    <div>
      <AlertRouter />
      <BadgesRouter />
      <BreadcrumbsRouter />
      <ButtonDropdownRouter />
    </div>
  );
}

export default ButtonRouter;