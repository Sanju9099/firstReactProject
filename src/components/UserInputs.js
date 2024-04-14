import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./UserInputs.module.css"
import Button from "./Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "./Helper/Wrapper";



const UserInputs = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUsedAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredUsedAge.trim().length === 0){
            setError({
                title: "Invalid input",
                message: "Please enter valid name"
            })
            return;
        }
        if(+enteredUsedAge < 1){
            setError({
                title: "Invalid age",
                message: "Enter valid age"
            })
            return;
        }
        props.onAddUser(enteredUserName, enteredUsedAge)
        setEnteredAge('');
        setEnteredUserName('');
    }

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    const erroHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
        {error && ( <ErrorModal 
        title={error.title} 
        message={error.message} 
        onConfirm={erroHandler}
        />
        )}
        <Card className={classes.input}>
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="user-name">User Name</label>
            <input type="text" id="user-name" value={enteredUserName} onChange={userNameChangeHandler}/>
            <label htmlFor="age">Age (years)</label>
            <input type="number" id="age" value={enteredUsedAge} onChange={ageChangeHandler}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </Wrapper>
    )
}

export default UserInputs;