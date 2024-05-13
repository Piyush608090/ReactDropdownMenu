
import {useState} from "react"
import './App.css';
function App() {
  // Arrays and states for App Properties
  const [answer,setAnswer] = useState("")
  const [optionArray, setOptionArray] = useState([]);
  const list = ["Probably Not","Absolutely not","not sure about that","never"]
   // This function will fired , when we we will hover on the Select button
   const handleMouseOver = ()=>{
    setOptionArray(list);
  }
  return (
    <>
    <div className="main">
    <h1> Q.Should you use a dropdown</h1>
    <div className="dropdown">
    <button className="dropbtn" onMouseOver={handleMouseOver}>Select...</button>
    <div className="dropdown-content">
    {/* Iterate over every elemnt of Array */}
    {optionArray.map((data)=>(
    <div onClick={()=>setAnswer(data)}>{data}</div>
    ))}
    </div>  
    </div>
    {/* Answer Shows here */}
    <div><p>{answer}</p></div>
    </div>
    </>
  );
}
export default App;
