import styles from "./CarOverview.module.css";
export default function CarOverview(props) {
  console.log(props)
   const overviewItems = [
    {
      label: "Make Year",
      display: props?.details?.make_year
    },
    {
      label: "Registration Year",
      display: props?.details?.registration_year
    },
    {
      label: "Fuel Type",
      display: props?.details?.fuel_type
    },
    {
      label: "KM driven",
      display: props?.details?.mileage +" Kms"
    },
    {
      label: "Transmission",
      display: props?.details?.transmission
    },
    {
      label: "No. Of Owner",
      display: props?.details?.no_of_owners
    },
    {
      label: "Insurance Validity",
      display: props?.details?.insurance_validity_month +' '+props?.details?.insurance_validity_year
    },
    {
      label: "Insurance Type",
      display: props?.details?.insurance_type
    },
    {
      label: "RTO",
      display: props?.details?.rto
    },
    {
      label: "Car Location",
      display: props?.details?.locality +', ' +props?.details?.city
    }
  ]
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