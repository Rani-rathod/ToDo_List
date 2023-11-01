const Form = ({input,setInput,todos,setTodos}) =>{
    const onInputChange = (event)=>{
        setInput(event.target.value);
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
    }
    return(
         <form className="todoForm" onSubmit={onFormSubmit}>
               <input type="text" placeholder="Enter a Todo...." 
               value={input}
               required
               onChange={onInputChange}
               />
               <button className="Button_Add" type="submit">Add</button>
         </form>
     )
}
export default Form; 
