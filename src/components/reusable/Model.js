import { FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './Model.css';

export default function Model(props) {
    const{className, heading, body, closeHandler, isOpen} = props;
    const visibility = isOpen ? "hide" : "";
    return (
        <div className={"ModelContainer "+visibility+"ModelContainer" }>
            <div className="ModelBackground" onClick={()=>{closeHandler()}}>
                <div className={"modelContent " +className} onClick={(e)=>e.stopPropagation()} >
                    
                    <div className="modelHeading">
                    <IconContext.Provider value={{ className: "crossIcon" }}>
                            <div onClick={()=>{closeHandler()}}><FaTimes /></div>
                        </IconContext.Provider>
                       {heading} 
                    </div> <hr/>
                    <div className="modelBody">
                        {body}{props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}