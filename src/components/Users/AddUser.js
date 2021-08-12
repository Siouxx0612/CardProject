import React, { useState } from 'react';
import Card from '../UI/Card'
import classes from '../Users/AddUser.module.css';
import Button from '../UI/Button';



const AddUser = (props) => {
    //array destructuring as useState Hook has 2 parameters. First parameter is a snapshot, and second parameter is a function that can be called to change that first state which then rerenders.
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUsername, enteredAge);
    }

    const userameChangeHander = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
        <Card className={classes.input} >
            <form onSubmit={addUserHandler} >
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={userameChangeHander}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );

};

export default AddUser;