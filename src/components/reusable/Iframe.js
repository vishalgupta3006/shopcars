import styles from "./Iframe.module.css";
export default function Iframe(props) {
  const {src='', loading='lazy', title='iFrame', className = '', height} = props;
  return (
    <div className={styles.iframe}>
      <iframe style = {{height:height}} class = {className} title={title} loading={loading} src={src} />
    </div>
  );
}