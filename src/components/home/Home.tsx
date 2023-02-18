import React from 'react';
import styles from './Home.module.css';
import containerStyles from '../../common/styles/Container.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={containerStyles.container}>
                <div className={styles.homeBlock}>
                    <div className={styles.nameBlock}>
                        <h2>Vladimir Kurochkin</h2>
                        <h3>React-Developer</h3>
                        <button>See portfolio</button>
                    </div>
                    <div className={styles.photoBlock}>
                        <img src={require('../../assets/images/avatar.png')} alt="My photo"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
