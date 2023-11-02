"use client"
import React, { useState } from 'react';
import Dropdowns from './dropD.js';
import TimeInput from './time.js';

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo, done: false }, ...todos]);
      setTodo(""); 
    }
  };

  const done = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos(delTodo);
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <h1>Todo List</h1>
          <form className="todoForm" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a Task..."
              className="text-input"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          
            <button type="submit">Add</button>
          </form>
          
          <Dropdowns />
          <TimeInput />
          
          <ul className="allTodos">
            {todos.map((t) => (
              <li className="singleTodo" key={t.id}>
              
                <span className="todoText" style={{ textDecoration: t.done ? 'line-through' : 'none' }}>{t.todo}</span>
                <button onClick={() => done(t.id)}>
                  {t.done ? 'Not done' : 'Done'}
                </button>
                <button onClick={() => handleDelete(t.id)}>Delete</button>
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;


