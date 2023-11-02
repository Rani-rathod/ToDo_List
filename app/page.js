"use client"
import React, {useState} from 'react';
import Dropdowns from './dropD.js';
import TimeInput from './time.js'
const App=()=>{
    const [todo,setTodo]=useState("")
    const [todos,setTodos]=useState([])
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if (todo!==""){
            setTodos([{id:`${todo}-${Date.now()}`,todo}, ...todos])
        }
    }
    const handleDelete=(id)=>{
        const delTodo=todos.filter((to)=>to.id!==id)
        setTodos([...delTodo])
    }
    return (
    <>
        <div className="App">
            <div className="container">
               
                <h1>Todo List</h1>
                <form className="todoForm" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter a Task..." className="text-input" onChange={(e)=>setTodo(e.target.value)}/>
                    <button type="submit">Add</button>
                </form>
                <Dropdowns />
                <TimeInput />
                <ul className="allTodos">
                    {todos.map((t)=>(
                    <li className="singleTodo">
                        <span className="todoText" key={t.id}>{t.todo}</span>
                        <button>Done</button>
                        <button onClick={()=>handleDelete(t.id)}>Delete</button>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
    )
}
export default App;

