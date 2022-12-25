import {useState} from "react"; 
import "./Input.css"; 
const userlist=["Alan","Bob","Carol","Dean","Elin"];  
const Input=(props)=>{
    const [Inputvalue,Setinputvalue]= useState("");
    const Inputhandler=(event)=>{
        Setinputvalue(event.target.value)
    }
    const Buttonhandler=()=>{
        const Newmessage={
            id: Math.random().toString(),  
            name: userlist[Math.floor(Math.random()*userlist.length)],
            message: Inputvalue
        }
        props.onSave(Newmessage);
        Setinputvalue("")

    }

    return(
        <div className="Inputcontainer"> 
            <input type="text"  className="Inputdiv" onChange={Inputhandler} value={Inputvalue}placeholder="Type your text here"/>
            <button className="Button" onClick={Buttonhandler}>Send</button>
        </div>   
    )
};
export default Input;