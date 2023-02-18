import React from 'react';
import styles from './Skill.module.css'

export type SkillType = {
    id: string
    title: string
    description: string
    level: string
    logo: string
}
const Skill = ({skill}: { skill: SkillType }) => {
    return (
        <div className={styles.skill}>
            <div className={styles.skillPhoto}>
                <img src={skill.logo} alt=""/>
            </div>
            <h3>{skill.title}</h3>
            <div className={styles.descriptionBlock}>

                <span>{skill.description}</span>
            </div>
        </div>
    );
};

export default Skill;