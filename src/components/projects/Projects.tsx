import React from 'react';
import containerStyles from '../../common/styles/Container.module.css';
import {v1} from 'uuid';
import Project, {ProjectType} from './project/Project';
import styles from './Projects.module.css'

const initialPortfolio: ProjectType[] = [
    {
        id: v1(),
        title: 'Project #1',
        photo: 'https://github.githubassets.com/images/modules/open_graph/github-octocat.png',
        url: 'https://github.com/'
    }, {
        id: v1(),
        title: 'Project #2',
        photo: 'https://miro.medium.com/max/1400/1*SSRjtoQ0H2X3SBPOiJ5rZw.jpeg',
        url: 'https://github.com/'
    }, {
        id: v1(),
        title: 'Project #3',
        photo: 'https://github.githubassets.com/images/modules/open_graph/github-octocat.png',
        url: 'https://github.com/'
    }, {
        id: v1(),
        title: 'Project #4',
        photo: 'https://miro.medium.com/max/1400/1*SSRjtoQ0H2X3SBPOiJ5rZw.jpeg',
        url: 'https://github.com/'
    },
]

const Projects = () => {
    const mappedProjects = initialPortfolio.map(project =>
        <Project key={project.id} project={project}/>)
    return (
        <div className={styles.portfolio}>
            <div className={containerStyles.container}>
                <h2>My Projects</h2>
                <div className={styles.portfolioBlock}>
                    {mappedProjects}
                </div>
            </div>
        </div>
    );
}

export default Projects;
