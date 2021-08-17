import React, { useRef, useState } from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from '../Users/AddUser.module.css';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';


const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    //array destructuring as useState Hook has 2 parameters. First parameter is a snapshot, and second parameter is a function that can be called to change that first state which then rerenders.
   
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge= ageInputRef.current.value;
        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'invalid Input',
                message: 'Please enter valid name and age',
            })
            return;
        }
        // adding + makes sure that that value is a number, not a string
        if( +enteredUserAge < 1) {
            setError({
                title: 'invalid age',
                message: 'Please enter valid age',
            })
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        //NOT advisable to manipulating the DOM on this way
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
       
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
                        
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                       
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );

};

export default AddUser;