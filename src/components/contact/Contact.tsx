import React from 'react';
import styles from './Contact.module.css';
import containerStyles from '../../common/styles/Container.module.css';

const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={containerStyles.container}>
                <h2>My Contact</h2>
                <div className={styles.contactBlock}>
                    <Form/>
                </div>
            </div>
        </div>
    );
}

const Form = () => {
    return <form action="#" method={'get'} className={styles.form}>
        <div className={styles.inputs}>
            <Input title={'Name'} className={styles.input}/>
            <Input title={'Email'} className={styles.input}/>
            <Input title={'Phone'} className={styles.input}/>
            <Input title={'Subject'} className={styles.input}/>
        </div>
        <textarea className={styles.textArea} placeholder={'Your Message'}/>
        <Button name={'Send Message'} className={styles.button}/>
    </form>
}

const Input = (props: any) => {
    return (
        <div>
            <input type="text" className={props.className} placeholder={props.title}/>
        </div>
    )
}

const Button = ({name, className}: { name: string, className: string }) => {
    return <div className={className}>
        {name}
    </div>
}

export default Contact;
