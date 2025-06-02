import Todofrom from "./todolist"
import Todolist from "./todolist1"
import { useState } from "react";
function Todo() {
    const[list,chnagelist] = useState([{id:1,activity:"add food"},{id:2,activity:"remove food"}]);
    return (
        <> 
        <div className="flex gap-5 flex-wrap ">
             <Todofrom list={list} chnagelist={chnagelist}></Todofrom> 
             <Todolist list={list} chnagelist={chnagelist}></Todolist>

        </div>




        </>

    )
}
export default Todo