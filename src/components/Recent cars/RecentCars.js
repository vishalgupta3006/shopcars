import { useEffect, useState } from "react";
import Carcard from "../reusable/Carcard";
import Topbar from "../topbar/Topbar";
import axios from "axios";
import styles from "./RecentCars.module.css";
const RecentCars = () => {
  console.log(styles);
  const [recentCarsList, setRecentCarsList] = useState([]);
  const [carCount, setCarCount] = useState(0);
  const recentCarsAPI = (params) => {
    axios({
      method: "GET",
      url: "https://api.spinny.com/api/c/listings/",
      params: params
    })
      .then(response => {
        setRecentCarsList(response.data.results);
        setCarCount(response.data.results.length);
      })
      .catch(err => console.log(err));
  }
  const recentCarsFetcher = () => {
    const recentCarsView = JSON.parse(localStorage.getItem("recentCarsView"));
    const ids = recentCarsView.toString();
    recentCarsAPI({ ids: ids });
  }

  useEffect(() => {
    recentCarsFetcher();
  }, []);
  return (
    <div>
      <Topbar />
      <div className={styles.recentMainWrapper}>
        <div className={styles.recentCarsHeaderSection}>
          <div className={styles.recentCarsHeading}>
            Recently Viewed cars
          </div>
          <div className={styles.carCounts}>
            {carCount} Cars
          </div>
        </div>
        <div className={styles.recentContainer}>
          {
            recentCarsList &&
            recentCarsList.map((item, index) => {
              return <div key={index}><Carcard car={item} /></div>
            })
          }
        </div>
      </div>
    </div>
  )
}
export default RecentCars;