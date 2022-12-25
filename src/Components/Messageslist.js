import "./Messageslist.css"; 
import Messages from "./Messages";
const Messageslist=(props)=>{
    return(
        <div className="Messageslistcontainer">
            {props.items.map((item)=>(
                <Messages
                    key={item.id}
                    name={item.name}
                    message={item.message}  
                />  
            ))};  
        </div>
    )
};
export default Messageslist;    