import React from 'react';
import AlertRouter from './AlertRouter';
import BadgesRouter from './BadgesRouter';
import BreadcrumbsRouter from './BreadcrumbsRouter';
import ButtonDropdownRouter from './ButtonDropdownRouter';
import ButtonGroupRouter from './ButtonGroupRouter';
import ButtonRouter from './ButtonRouter';

const AppRouter = () => {
  return (
    <div>
      <AlertRouter />
      <BadgesRouter />
      <BreadcrumbsRouter />
      <ButtonDropdownRouter />
      <ButtonGroupRouter />
      <ButtonRouter />
    </div>
  );
}

export default AppRouter;