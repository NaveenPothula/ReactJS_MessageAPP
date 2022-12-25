import {useState}  from "react";
import "./Messages.css";  
const Message=(props)=>{
    const [colour,Setcolour]=useState("white")
    const [Counter,Setcounter]=useState(0);
    const style={
        background: colour,
    }
    const name=props.name
    const Likehandler=()=>{
        Setcounter(Counter+1)
        Setcolour("red")
    }
    return(
        <div className="Messagecontainer">
            <div className="Logo">  
                <span className="Logocontent">{name.slice(0,2)}</span>    
            </div>
            <div className="Messagebox">
                <div className="Fullname">  
                    <span className="Fullnamecontent">{name}</span>  
                </div>
                <div className="Messagecontent">  
                    <div className="Fullmessage">
                        <span>{props.message}</span>  
                    </div>
                <button style={style} className="Buttoncontent" onClick={Likehandler}>Like</button>
                <span className="Counter">{Counter}</span>    
                </div>
            </div>

        </div>
    )
}
export default Message;     