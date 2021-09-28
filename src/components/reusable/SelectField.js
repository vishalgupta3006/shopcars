import styles from "./SelectField.module.css";
export default function SelectField(props) {
  const { className = "", label = "", id = "", options = [], onclickhandler = () => { } } = props;
  return (
    <div className={styles.selectField} onClick={() => onclickhandler()}>
      <label>{label}
        <select className={className} id={id}>
          {
            options.map((option, index) => {
              return <option key={index} value={option.value}>{option.displayValue}</option>
            })
          }
        </select>
      </label>
    </div>
  )
}