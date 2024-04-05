import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../../components/navigation/navigation/Navigation';
import classes from './Rout.module.css';

const RoutLayout = () => {
  return (
    <>
      <Navigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RoutLayout;
