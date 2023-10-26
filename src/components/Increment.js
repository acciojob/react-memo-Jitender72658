import React,{useState} from "react";

const Increment = ()=>{
     const [count,setCount] = useState(0);
     function increseCount(){
        setCount(count+1);
     }
     return (
        <div>
            <span>Count {" "} {count}{" "}</span>
            <button id="incr-cnt" onClick={increseCount}>+</button>
        </div>
     )
}

export default Increment;