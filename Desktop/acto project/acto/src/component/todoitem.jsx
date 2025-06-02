function Todoitem(props){

    var list=props.list;
    var chnagelist=props.chnagelist;

    function chnage(last){
        var lasthting=list.filter(function(data)
        {
            if(data.id===last)
        {
          return false
        }
        else{
            return true
        }
        
        }
         
    
      
        
    )
     chnagelist(lasthting)

        

    }

    
    return(
        <>
        <div className="flex justify-between">
            <p>{props.index+1}.{props.activity}</p>
        <button  className="text-red-600" onClick={function(){
            chnage(props.id)
        }}>delete</button>
        </div>
        
        </>
        
    )
}
export default Todoitem;