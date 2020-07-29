import React, { useState, useEffect } from 'react';
import Todo from './Todo';
//import React from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  //console.log(':fire',input);

  //when the app loads, we needs to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      //console.log(snapshot.docs.map(doc => doc.data().todo));
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []);

  //above loads when app loadss

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault();
    
db.collection('todos').add({
  todo: input,
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
})

    //setTodos([...todos, input]);
    setInput(''); //clear the input in box
  }
  return (
    <div className="App">
      <h1> Hello to Everyone</h1>

      <form>
      <FormControl>
        <InputLabel> ✔ Write a Todo </InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>

      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
      Add todo
      </Button>
            
    </form>
      <ul>
      {todos.map(todo =>(
        <Todo todo={todo}/>
      ))}
      </ul>
    </div>
  );
}

export default App;
