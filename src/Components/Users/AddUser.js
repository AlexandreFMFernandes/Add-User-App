import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {


    // using useRef to connect html elements to references
    // by doing so we are creating an uncontroled component
    // to use a controlled component, where we manage all the data
    // we would use state, for example. You can see in the end of the page
    // the code as a controlled component
  
    const nameInputRef = useRef();
    const ageInputRef = useRef();
  
    const [error, setError] = useState();
  
    const AddUserHandler = (event) => {
      event.preventDefault();
  
      //const for getting values of typed and selected information
      //to then render, instead on using an onChange, for example
      //which renders on every key stroke. This avoids using a 
      //useState, since useRef manages that
  
  
      const enteredName = nameInputRef.current.value
      const enteredUserAge = ageInputRef.current.value
      if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
        setError({
          title: "Invalid Input",
          message: "Please enter a valid name and age",
        });
        return;
      }
      if (+enteredUserAge < 1) {
        setError({
          title: "Invalid Age",
          message: "Please enter a valid age (> 0 )",
        });
        return;
      }
      props.onAddUser(enteredName, enteredUserAge);
  
      //setting values to reset input fields. this should be used with
      //caution, since we are manipulaiting DOM directly
  
      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
    };
  
    const errorHandler = () => {
      setError(null);
    };
  
    //Example of calling our Wrapper helper, although we could just have used a React.Fragment
    //(or just Fragment, if after importing React you also import Fragment)
  
    return (
      <Wrapper>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )}
        <Card className={classes.input}>
          <form onSubmit={AddUserHandler}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              ref={nameInputRef}
            />
  
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              id="age"
              ref={ageInputRef}
            />
  
            <Button className={classes.button} type="submit">
              Add User
            </Button>
          </form>
        </Card>
      </Wrapper>
    );
  };

  export default AddUser;

    /* CONTROLLED APPROACH*/

// const AddUserControlled = (props) => {

//   const [enteredUsername, setEnteredUserName] = useState("");
//   const [enteredAge, setEnteredAge] = useState("");
//   const [error, setError] = useState();

//   const AddUserHandler = (event) => {
//     event.preventDefault();
//     if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
//       setError({
//         title: "Invalid Input",
//         message: "Please enter a valid name and age",
//       });
//       return;
//     }
//     if (+enteredAge < 1) {
//       setError({
//         title: "Invalid Age",
//         message: "Please enter a valid age ( >0 )",
//       });
//       return;
//     }
//     props.onAddUser(enteredUsername, enteredAge);
//     setEnteredUserName("");
//     setEnteredAge("");
//   };

//   const usernameChangeHandler = (event) => {
//     setEnteredUserName(event.target.value);
//   };

//   const ageChangeHandler = (event) => {
//     setEnteredAge(event.target.value);
//   };

//   const errorHandler = () => {
//     setError(null);
//   };

//   //Example of calling our Wrapper helper, although we could just have used a React.Fragment
//   //(or just Fragment, if after importing React you also import Fragment)

//   return (
//     <Wrapper>
//       {error && (
//         <ErrorModal
//           title={error.title}
//           message={error.message}
//           onConfirm={errorHandler}
//         />
//       )}
//       <Card className={classes.input}>
//         <form onSubmit={AddUserHandler}>
//           <label htmlFor="username">Username</label>
//           <input
//             value={enteredUsername}
//             onChange={usernameChangeHandler}
//             type="text"
//             id="username"
//             ref={nameInputRef}
//           />

//           <label htmlFor="age">Age (Years)</label>
//           <input
//             value={enteredAge}
//             onChange={ageChangeHandler}
//             type="number"
//             id="age"
//             ref={ageInputRef}
//           />

//           <Button className={classes.button} type="submit">
//             Add User
//           </Button>
//         </form>
//       </Card>
//     </Wrapper>
//   );
// };


