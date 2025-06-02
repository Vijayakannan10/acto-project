import { useState } from "react";

function Todofrom(props){

    const list=props.list;
        const chnagelist=props.chnagelist;

        const[textvalue,mainvalue] = useState("")

        function everything(event){
            mainvalue(event.target.value) 
        }
        function clickchnage(){
            chnagelist([...list,{id:list.length+1,activity:textvalue}])
        }
    
    return(
    <div className="flex flex-col gap-3" >
                <h1 className="font-medium text-2xl mt-5">MANAGE ACTIVITIES</h1>
                <div >
                    <input value={textvalue} onChange={everything}
                    className="border border-black bg-transparent p-1" placeholder="enter the activity"></input>
                    <button onClick={clickchnage} className="bg-black text-white p-1 border border-black">ok</button>
                </div>
            </div>
)

}

export default Todofrom;