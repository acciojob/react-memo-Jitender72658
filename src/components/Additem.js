
import React,{useState} from "react";


const Additem = ()=>{
    const [items, setItem] = useState([]);
    const [value, setValue] = useState("");
    function addItem(){
        const updatedItems = [...items, value];
        setItem(updatedItems);
    }
    function updateValue(event){
          setValue(event.target.value);
    }
    return (
        <div>
            <input onChange={updateValue}/> 
            <button onClick={addItem}>Submit</button>
            <ul>
              { items.map((value,index)=>{
                  return  <li key={index}>{value}</li>
                })
            }
            </ul>
        </div>
    )
}
export default Additem;