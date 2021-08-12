import React, { useState } from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from '../Users/AddUser.module.css';
import Button from '../UI/Button';



const AddUser = (props) => {
    //array destructuring as useState Hook has 2 parameters. First parameter is a snapshot, and second parameter is a function that can be called to change that first state which then rerenders.
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        // adding + makes sure that that value is a number, not a string
        if( +enteredAge < 1) {
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

    return (
        <div> 
            <ErrorModal title="Error ocured" message="Something went wrong!" />
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
        </div>
    );

};

export default AddUser;