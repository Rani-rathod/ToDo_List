"use client"
import React from 'react';
import Dropdowns from './dropD.js';

const App=()=>{
    return (
    <>
        <div className="App">
            <div className="container">
                <h1>Todo List</h1>
                <form className="todoForm">
                    <input type="text" />
                    <button>Add</button>
                </form>
                <Dropdowns />
                <ul className="allTodos">
                    <li className="singleTodo">
                        <span className="todoText">Status</span>
                        <button>Delete</button>
                    </li>
                    <li className="singleTodo">
                        <span className="todoText">Status</span>
                        <button>Delete</button>
                    </li>
                </ul>
            </div>
        </div>
    </>
    )
}
export default App;
