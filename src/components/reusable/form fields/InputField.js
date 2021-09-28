import './InputField.css';
export default function InputField(props) {
    const { type = "text", placeholder, className = "default", label = "", id = "", onclickhandler = () => { } } = props;
    return (
        <div className="inputField" onClick={() => onclickhandler()}>
            <label> {label}
                <input type={type} placeholder={placeholder} className={className} id={id} autoComplete="on"/>
            </label>
        </div>
    );
}