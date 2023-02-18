import React from 'react';
import styles from './Nav.module.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <div className={styles.nav}>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/skills'}>Skills</NavLink>
            <NavLink to={'/portfolio'}>Portfolio</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>

        </div>
    );
}

export default Nav;
