import { useLocation } from "react-router-dom"
import Header from "./header"
import Card from "./card"
import Todo from "./todocontainer"

    
    
    function Loading(){

      const data =useLocation()
    return(
    
 <>
      <div className="bg-black p-20">
        <div className="bg-white p-10 border rounded-2xl">
          <Header name={data.state.admin} />
          <div className="flex justify-between ml-5 gap-7 flex-wrap">
            <Card bgcolor={"green"} title={"chenni"} subtitle={"11:11"} />
            <Card bgcolor={"red"} title={"December"} subtitle={"14:10:10"} />
            <Card bgcolor={"yellow"} title={"Build"} subtitle={"using react"} />
          </div>
          <Todo/>


        </div>

      </div>
    </>
     
    )
}
export default Loading;
