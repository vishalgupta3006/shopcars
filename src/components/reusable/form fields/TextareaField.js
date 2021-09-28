import styles from "./TextareaField.module.css";
export default function TextareaField(props) {
  const { placeholder, className = "", label = "", defaultText = "", id = "", onclickhandler = () => { } } = props;
  return (
    <div className={styles.textareaField} onClick={() => onclickhandler()}>
      <label>{label}
        <textarea placeholder={placeholder} className={className} id={id} autoComplete="on" defaultValue ={defaultText}></textarea>
      </label>
    </div>
  );
}