// import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';
import { CloseOutlined, MenuOutlined } from '@mui/icons-material';
import { useState } from 'react';
import Logo from '../../logo/Logo';

const NavLinks = () => {
  return (
    <ul className={classes.navLinks}>
      <li>
        <Link to='/orderOnline'>Order Online</Link>
      </li>
      <li>
        <Link to='/'>Local Pickup</Link>
      </li>
      <li>Catering</li>
      <li>Menu</li>
      <li>About</li>
    </ul>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className={classes.navigation}>
          <Logo />
          <NavLinks />
        </div>
        <div className={classes.btnToggle}>
          <Logo />
          <button onClick={toggleNavbar}> {isOpen ? <CloseOutlined /> : <MenuOutlined />}</button>
        </div>
      </nav>
      {isOpen && (
        <div>
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Navigation;
