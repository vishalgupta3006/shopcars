import './Button.css';
export default function Button(props) {
    const { type = "button", label = "", className = "default", onclickhandler=()=>{}} = props;
    //default width 100%, btn-medium for 50%, btn-small for 25%
    return (
        <div className="buttonWrapper">
            <button type={type} className={className} onClick={(e)=>onclickhandler(e)}>{label}</button>
        </div>
    );
}