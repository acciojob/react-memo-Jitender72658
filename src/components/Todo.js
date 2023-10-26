import React,{useState} from "react";


const Todo = ()=>{
    const[list, setList] = useState([]);
     function addTodo(){
         const updatedList = [...list,"New Todo"];
         setList(updatedList);
     }
    return (
        <div>
            <p>My Todos</p>
            <div>
               {list.map((element, index) => (
                 <p key={index}>{element}</p>
               ))}
             </div>
            <button id="add-todo-btn" onClick={addTodo}>Add Todo</button>
        </div>
    )
}
export default Todo;