import React from "react";
import Todo from "./Todo";
import Increment from "./Increment";
import Additem from "./Additem"

const App = ()=>{
    return(
        <div id="main">
            <Todo/>
            <Increment/>
            <Additem/>
        </div>
    )
}
export default App;