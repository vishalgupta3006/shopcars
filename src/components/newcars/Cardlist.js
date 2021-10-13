import Carcard from "../reusable/Carcard";
import Loader from "../reusable/Loader";
import styles from './Cardlist.module.css';
export default function Cardlist(props) {
  const { carList = [], isCarListLoading, lastCarElement } = props;

  return (
    (carList.length === 0) ? <Loader /> :
      <div className={styles.cardContainer}>
        {
          carList.map((carData, index) => {
            if (index + 1 === carList.length) {
              return <div className={styles.carCardWrapper} ref={lastCarElement} key={carData.id}>
                <Carcard car={carData} />
              </div>
            }
            else
              return <div className={styles.carCardWrapper} key={carData.id}>
                <Carcard car={carData} />
              </div>
          })
        }
        {(isCarListLoading) ? <Loader /> : <></>}
      </div>
  )
}