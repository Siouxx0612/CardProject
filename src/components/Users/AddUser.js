import React, { useState } from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from '../Users/AddUser.module.css';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';


const AddUser = (props) => {
    //array destructuring as useState Hook has 2 parameters. First parameter is a snapshot, and second parameter is a function that can be called to change that first state which then rerenders.
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'invalid Input',
                message: 'Please enter valid name and age',
            })
            return;
        }
        // adding + makes sure that that value is a number, not a string
        if( +enteredAge < 1) {
            setError({
                title: 'invalid age',
                message: 'Please enter valid age',
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        //console.log(enteredUsername, enteredAge);
        //reseting the state after log
        setEnteredUsername('');
        setEnteredAge('');
    }

    const userameChangeHander = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper> 
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input} >
                <form onSubmit={addUserHandler} >
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={enteredUsername}
                        onChange={userameChangeHander}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        value={enteredAge}
                        onChange={ageChangeHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );

};

export default AddUser;