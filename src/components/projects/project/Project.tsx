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
        <div style={{background: `url('${project.photo}') center / cover no-repeat`}} className={styles.project}>
            <h2>{project.title}</h2>
            <div className={styles.button}>Open</div>
        </div>
    );
};

export default Project;
