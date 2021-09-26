import { IconContext } from "react-icons"
import { FaTimes } from "react-icons/fa"

export default function modelHeading(props) {
    const {heading, closeHandler} = props;
    return (
        <div className="modelHeading">
            <IconContext.Provider value={{ className: "crossIcon" }}>
                <div onClick={() => { closeHandler() }}><FaTimes /></div>
            </IconContext.Provider>
            {heading}
        </div>
    )
}