import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  // State for "Personal To Do List"
  const [myTodos, setMyTodos] = useState([]);
  const [myNewTodo, setMyNewTodo] = useState('');
  const [myEditingIndex, setMyEditingIndex] = useState(null);
  const [myEditedTodo, setMyEditedTodo] = useState('');

  // State for "Family To Do List"
  const [theirTodos, setTheirTodos] = useState([]);
  const [theirNewTodo, setTheirNewTodo] = useState('');
  const [theirEditingIndex, setTheirEditingIndex] = useState(null);
  const [theirEditedTodo, setTheirEditedTodo] = useState('');
   
  // Input change
  const handleInputChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  // Adding a to do
  const handleAddTodo = (todosArray, setFunction, newTodoValue) => {
    if (newTodoValue.trim() !== '') {
      setFunction([newTodoValue, ...todosArray]);
      setMyNewTodo('');
    }
  };

  // Deleting a to do
  const handleDeleteTodo = (index, todosArray, setFunction) => {
    const updatedTodos = [...todosArray];
    updatedTodos.splice(index, 1);
    setFunction(updatedTodos);
  };

  // Edit button
  const handleEditClick = (index, todo, setEditingIndexFunction, setEditedTodoFunction) => {
    setEditingIndexFunction(index);
    setEditedTodoFunction(todo);
  };

  // Save button
  const handleSaveClick = (index, todosArray, setFunction, setEditingIndexFunction, setEditedTodoFunction) => {
    const updatedTodos = [...todosArray];
    updatedTodos[index] = myEditedTodo; 
    setFunction(updatedTodos);
    setEditingIndexFunction(null);
    setEditedTodoFunction('');
  };

  return (
    <div className="app">
      <div className="todo-list">
      <h1>Our To Do Lists</h1>
        <h1 className="heading">Personal</h1>
        <input
          type="text"
          value={myNewTodo}
          onChange={(event) => handleInputChange(event, setMyNewTodo)}
          placeholder="Add a new task"
        />

        <button className="add-button" onClick={() => handleAddTodo(myTodos, setMyTodos, myNewTodo)}>
          Add
        </button>

        {myTodos.map((todo, index) => (
          <div key={index}>
            {myEditingIndex === index ? (
              <>
                <input
                  type="text"
                  value={myEditedTodo}
                  onChange={(event) => handleInputChange(event, setMyEditedTodo)}
                />

                <button onClick={() => handleSaveClick(index, myTodos, setMyTodos, setMyEditingIndex, setMyEditedTodo)}>Save</button>
              
              </>
            ) : (
              <>
                <input type="checkbox" className="checkbox" />
                <span>{todo}</span>

                <button
                  className="edit-button"
                  onClick={() => handleEditClick(index, todo, setMyEditingIndex, setMyEditedTodo)}
                >
                  Edit
                </button>

                <button
                  className="delete-button"
                  onClick={() => handleDeleteTodo(index, myTodos, setMyTodos)}
                >
                  Delete
                </button>

              </>
            )}
          </div>
        ))}
      </div>

      <div className="todo-list">
        <h1 className="heading">Family</h1>
        <input
          type="text"
          value={theirNewTodo}
          onChange={(event) => handleInputChange(event, setTheirNewTodo)}
          placeholder="Add a new task"
        />

        <button className="add-button" onClick={() => handleAddTodo(theirTodos, setTheirTodos, theirNewTodo)}>
          Add
        </button>

        {theirTodos.map((todo, index) => (
          <div key={index}>
            {theirEditingIndex === index ? (
              <>
                <input
                  type="text"
                  value={theirEditedTodo}
                  onChange={(event) => handleInputChange(event, setTheirEditedTodo)}
                />

                <button onClick={() => handleSaveClick(index, theirTodos, setTheirTodos, setTheirEditingIndex, setTheirEditedTodo)}>Save</button>
              
              </>
            ) : (
              <>
                <input type="checkbox" className="checkbox" />
                <span>{todo}</span>
                
                <button
                  className="edit-button"
                  onClick={() => handleEditClick(index, todo, setTheirEditingIndex, setTheirEditedTodo)}
                >
                  Edit
                </button>

                <button
                  className="delete-button"
                  onClick={() => handleDeleteTodo(index, theirTodos, setTheirTodos)}
                >
                  Delete
                </button>

              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
