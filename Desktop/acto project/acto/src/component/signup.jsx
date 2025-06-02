
import { Link} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Signup(props){
  const navigate=useNavigate()

    const data=props.data;
    const chnagedata=props.chnagedata;

      const[iteminput,inputchnage] = useState("");
        const[itemoutput,outputchnage]= useState("");
       
    
        function inputfunction(event){
                 inputchnage(event.target.value)
        }
        function outputfunction(event){
                 outputchnage(event.target.value)
        }
        function checkit(){
             chnagedata([...data,{admin:iteminput,password:itemoutput}])
             navigate("/")
        }
       
    return(
        <div className="bg-black p-10">
        <div className="bg-white p-10 border rounded-md">
           <h1 className="text-3xl font-medium">Hey HIII</h1>
           <p>we will match it sir for you :)</p>
           <div className="flex flex-col gap-2 my-2">
            <input value={iteminput} onChange={inputfunction} type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="enter user name"></input>
            <input value={itemoutput} onChange={outputfunction} type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="enter password"></input>
            <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="enter confirm password"></input>
            <button  onClick={checkit} className="bg-[#FCA201] border rounded-md p-1 w-24">Signup</button>
            <p>if you have already account?<Link to={"/"}>Login</Link></p>
           </div>
         </div>
        </div>
    )
}
export default Signup;