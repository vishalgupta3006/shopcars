import './Button.css';
export default function Button(props) {
    const { type = "button", label = "", className = "default", onclickhandler=()=>{}} = props;
    return (
        <div className="buttonWrapper">
            <button type={type} className={className} onClick={(e)=>onclickhandler(e)}>{label}</button>
        </div>
    );
}