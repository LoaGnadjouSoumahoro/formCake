import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <div>
      <header>
        <nav>
          <ul className={classes.navLinks}>
            <li>
              <Link to='/orderOnline'>Order Online</Link>
            </li>
            <li>
              <Link to='/'>Local Pickup</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
