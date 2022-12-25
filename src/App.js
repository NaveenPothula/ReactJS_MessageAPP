import {useState} from "react";
import Messageslist from "./Components/Messageslist";
import "./App.css";
import Input from "./Components/Input";
import Header from "./Components/Header";  
const userlist=["Alan","Bob","Carol","Dean","Elin"];  
const messages=[
  {
    id:"u2",
    name:userlist[Math.floor(Math.random()*userlist.length)],
    message:"Welcome to team chat with other members in the group",  
  
  },  
  {
    id:"u4",
    name:userlist[Math.floor(Math.random()*userlist.length)],
    message:"Hii rolande is around you",  

  }
];
const App=()=>{
  const [Messages,Setmessages]=useState(messages);
  const Addmessagehandler=(message)=>{
    Setmessages([message,...Messages])

  }
  return(
    <div className="Appcontainer">
      <Header/>
      <Messageslist items = {Messages} />
      <Input onSave={Addmessagehandler}/> 
    </div>
  )
};

export default App; 