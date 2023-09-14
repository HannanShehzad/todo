import React, { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: item, completed: false },
    ]);

    setItem(""); // Clear the input field after submitting
  }
  function toggleTodo(id, completed){

    setTodos(current=>{
      return current.map(todo=>{
        if(todo.id===id){
          return {...todo,  completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(current=>{
      return current.filter(todo => todo.id !==id)
    })
  }

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">todo list</h1>
      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                name=""
                id=""
                onChange={e => {
                  
                  console.log("toggle",e)
                  toggleTodo(todo.id, e.target.checked)}}
              />
              {todo.title}
            </label>
            <button className="btn btn-danger" on onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
