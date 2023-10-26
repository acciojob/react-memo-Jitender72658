import React from "react";
import Todo from "./Todo";
import Increment from "./Increment";
import Additem from "./Additem"

const App = ()=>{
    return(
        <div>
            <Todo/>
            <Increment/>
            <Additem/>
        </div>
    )
}
export default App;