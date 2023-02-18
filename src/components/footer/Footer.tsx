import React from 'react';
import styles from './Footer.module.css';
import containerStyles from '../../common/styles/Container.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={containerStyles.container}>
                <div className={styles.headers}>
                <h2>Vladimir Kurochkin</h2>
                <h4>© 2023 All rights reserved.</h4>
                </div>
            </div>
        </div>
    );
}

export default Footer;
