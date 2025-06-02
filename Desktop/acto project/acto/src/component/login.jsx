import { Link} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login(props){

    const navigate=useNavigate()

    const data=props.data;
    const chnagedata=props.chnagedata;

    const[iteminput,inputchnage] = useState("");
    const[itemoutput,outputchnage]= useState("");
   
    const[para,chnagepara]= useState(true)

    function inputfunction(event){
             inputchnage(event.target.value)
    }
    function outputfunction(event){
             outputchnage(event.target.value)
    }
    function check(){
        var chnage=false
        data.forEach(function(item){
          if(item.admin===iteminput && item.password===itemoutput){
                 console.log("sucess")
                 chnage=true
                 navigate("./loading",{state:{admin:iteminput}})
          }
          else{
            
          }
          if(chnage===false)
          {
            console.log("it not sucess")
             chnagepara(false)
          }
    })

    }
    

    
    



    return(
        <div className="bg-black p-10">
        <div className="bg-white p-10 border rounded-md">
           <h1 className="text-3xl font-medium">Hey HIII</h1>
          {
         para?<p>we will match it sir for you :)</p>:<p>incorrect </p>
          } 
           <div className="flex flex-col gap-2 my-2">
            <input value={iteminput} onChange={inputfunction} type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="enter user name"></input>
            <input  value={itemoutput} onChange={outputfunction} type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="enter password"></input>
            <button onClick={check} className="bg-[#8272DA] border rounded-md p-1 w-24">Login</button>
            <p>don't have account?<Link to={"/signup"}>Signup</Link></p>
           </div>
         </div>
        </div>
    )
}
export default Login;