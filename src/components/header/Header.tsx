import React from 'react';
import styles from './Header.module.css';
import containerStyles from '../../common/styles/Container.module.css';
import Nav from '../nav/Nav';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={containerStyles.container}>
                <Nav/>
            </div>
        </div>
    );
}

export default Header;
