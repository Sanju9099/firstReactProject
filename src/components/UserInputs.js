import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./UserInputs.module.css"
import Button from "./Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "./Helper/Wrapper";



const UserInputs = (props) => {

   const nameInputRef = useRef();
   const ageInputRef = useRef();
   const collegeInputRef = useRef();

   
    const [error, setError] = useState('');

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        const enteredCollegeName = collegeInputRef.current.value;
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0 || enteredCollegeName.trim().length === 0){
            setError({
                title: "Invalid input",
                message: "Please enter valid name"
            })
            return;
        }
        if(+enteredAge < 1){
            setError({
                title: "Invalid age",
                message: "Enter valid age"
            })
            return;
        }
        
        props.onAddUser(enteredName, enteredAge, collegeInputRef.current.value)
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        collegeInputRef.current.value = '';
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
            <input type="text"
             id="user-name" 
             ref={nameInputRef}
             />
            <label htmlFor="age">Age (years)</label>
            <input type="number" 
            id="age" 
            ref={ageInputRef}
            />
            <label htmlFor="college">College Name</label>
            <input type="text"
            id="college"
            ref={collegeInputRef}
            />
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </Wrapper>
    )
}

export default UserInputs;