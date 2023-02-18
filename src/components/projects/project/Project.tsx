import React from 'react';
import styles from './Project.module.css'

type ProjectPropsType = {
    project: ProjectType
}


export type ProjectType = {
    id: string
    title: string
    photo: string
    url: string
}
const Project = ({project}: ProjectPropsType) => {
    return (
        <div style={{
            background: `url('${project.photo}') top no-repeat`,
            backgroundPosition: 'center',
            backgroundSize: '100% 100%',
        }} className={styles.project}>
            <h2>{project.title}</h2>
            <div className={styles.button}>Open</div>
        </div>
    );
};

export default Project;