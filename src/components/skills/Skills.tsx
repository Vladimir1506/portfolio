import React from 'react';
import styles from './Skills.module.css';
import containerStyles from '../../common/styles/Container.module.css';
import Skill, {SkillType} from './skill/Skill';
import {v1} from 'uuid'

const initSkills: SkillType[] = [
    {
        id: v1(),
        title: 'JavaScript',
        description: 'JavaScript is the world\'s most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.',
        level: '90%',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png'
    },
    {
        id: v1(),
        title: 'HTML',
        description: 'HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn',
        level: '50%',
        logo: 'https://horoshiy-otzyv.ru/wp-content/uploads/2018/04/html.png'
    },
    {
        id: v1(),
        title: 'React',
        description: 'A JavaScript library for building user interfaces.', level: '55%',
        logo: 'https://png.pngitem.com/pimgs/s/664-6644509_icon-react-js-logo-hd-png-download.png'
    },
    {
        id: v1(),
        title: 'React Native',
        description: 'React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, ...',
        level: '30%',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbN-b5fI4v4lmzBloPah7HYY0to2D0I9YJTw&usqp=CAU'
    },
    {
        id: v1(),
        title: 'CSS',
        description: 'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.',
        level: '40%',
        logo: 'https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.jpg'
    },
    {
        id: v1(),
        title: 'OOP',
        description: 'Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic.',
        level: '70%',
        logo: 'https://thumbs.dreamstime.com/b/object-oriented-programming-isolated-icon-simple-element-illustration-technology-concept-icons-editable-logo-sign-symbol-142287627.jpg'
    },
]
const Skills = () => {
    const mappedSkills = initSkills.map((skill) =>
        <Skill key={skill.id} skill={skill}/>)
    return (
        <div className={styles.skills}>
            <div className={containerStyles.container}>
                <h2>My Skills</h2>
                <div className={styles.skillsBlock}>
                    {mappedSkills}
                </div>
            </div>
        </div>
    );
}

export default Skills;
