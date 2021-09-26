import './InputField.css';
export default function InputField(props) {
    const {type="text", placeholder, className="default",label="",id="", onclickhandler=()=>{}} = props;
    return (
        <div className="inputField" onClick = {()=>onclickhandler()}>
            <label for={id}> {label} </label>
            <input type={type} placeholder={placeholder} className={className} id={id}/>
        </div>
    );
}