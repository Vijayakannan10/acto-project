import Login from "./component/login"
import Signup from "./component/signup"
import Loading from "./component/loading"
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const[data,chnagedata] = useState([{admin:"vijay",password:"123"}])
  return (
    <>
      <Routes>
      <Route path="/" element={<Login data={data} chnagedata={chnagedata}/>} />
      <Route path="/signup" element={<Signup data={data} chnagedata={chnagedata} />} />
      <Route path="/loading" element={<Loading/>}/>
    </Routes>
    </>

  )
}

export default App;
