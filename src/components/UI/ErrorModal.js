import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from '../UI/ErrorModal.module.css';


const ErrorModal = (props) => {
    return (
        <div>
            <div ClassName={classes.backdrop} />
            <Card ClassName={classes.modal}>
                <header ClassName={classes.header} >
                    <h2>{props.title}</h2>
                </header>
                <div ClassName={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer ClassName={classes.footer}>
                    <Button>Okay</Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal;