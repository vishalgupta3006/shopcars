import styles from "./CarOverview.module.css";
import { overviewItems } from "./overviewItems";
export default function CarOverview(props) {
  return (
    <section >
      <div className={styles.CarOverviewWrapper}>
        <div className={styles.sectionHeading}>Car Overview</div>
        <div className={styles.CarOverview}>
          {
            overviewItems.map((item, index) => {
              return (<div key={index} className={styles.CarOverviewItems}>
                <div className={styles.overViewLabel}>{item.label}</div>
                <div className={styles.overviewDisplay}>{item.display}</div>
              </ div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}