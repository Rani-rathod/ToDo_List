"use client"
import React, {useState} from 'react';
import Dropdowns from './dropD.js';

const App=()=>{
    const [todo,setTodo]=useState("")
    const [todos,setTodos]=useState([])
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if (todo!==""){
            setTodos([{id:`${todo}-${Date.now()}`,todo}, ...todos])
        }
    }
    return (
    <>
        <div className="App">
            <div className="container">
               
                <h1>Todo List</h1>
                <form className="todoForm" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter a Todo..." className="text-input" onChange={(e)=>setTodo(e.target.value)}/>
                    <button type="submit">Add</button>
                </form>
                <Dropdowns />
                <ul className="allTodos">
                    {todos.map((t)=>(
                    <li className="singleTodo">
                        <span className="todoText">{t.todo}</span>
                        <button>Delete</button>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
    )
}
export default App;
