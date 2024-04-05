import { Outlet } from 'react-router-dom';
import Navigation from '../../components/navigation/navigation/Navigation';
import classes from './Rout.module.css';

const RoutLayout = () => {
  return (
    <div className={classes.layoutLocalPickup}>
      <header className={classes.header}>
        <Navigation />
      </header>
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default RoutLayout;
