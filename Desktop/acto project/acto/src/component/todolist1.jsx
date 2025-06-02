
import Todoitem from "./todoitem";
function Todolist(props){
         const list=props.list;
        const chnagelist=props.chnagelist;
    return(<div className="bg-blue-200 border border-300 rounded mt-5 p-2 flex-grow">
                <h1 class="text-2xl font-medium">today activity</h1>
                {list.length===0?<p>not yet add</p>:""}
                {
                    list.map(function(item,index){
                        return <Todoitem id={item.id} activity={item.activity} index={index} list={list} chnagelist={chnagelist}/>
                    })
                }
                
            </div>
 )

} 
 
 export default Todolist;