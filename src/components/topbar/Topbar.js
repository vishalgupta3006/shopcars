import styles from "./Topbar.module.css";
import { FaCar, FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import { BrowserRouter as Router } from "react-router-dom";
import { useHistory } from "react-router";
import { cities } from "../../constants/cities";
import { useDispatch } from "react-redux";
import { updateTheCity } from "../../redux/actions/action";
import Model from "../reusable/Model/Model";
import { useState } from "react";
import LoginForm from "../reusable/LoginForm";
import SignupForm from "../reusable/SignupForm";
const Topbar = () => {
  const dispatch = useDispatch();
  const cityHandler = (e) => {
    dispatch(updateTheCity(e.target.id));
    history.push("/newcars/" + e.target.id)
  }
  const history = useHistory();
  const [showLoginModel, setShowLoginModel] = useState(false);
  const [showSignupModel, setSignupModel] = useState(false);

  return (
    <Router>
      <div className={styles.topbar}>
        <div className={`${styles.topBarItem} ${styles.logoContent}`} onClick={() => { history.push("/") }}>
          <IconContext.Provider value={{ className: styles.logoIcon }}>
            <div ><FaCar /></div>
          </IconContext.Provider>
          <div className={styles.logoText}>
            Shop Cars
          </div>
        </div>
        <div className={`${styles.topBarItem} ${styles.searchArea}`}>
          <label className={styles.searchField}>
            <input className={styles.searchBar} type="text" placeholder="Search..." />
            <IconContext.Provider value={{ className: styles.searchIcon }}>
              <FaSearch />
            </IconContext.Provider>
          </label>
        </div>
        <div className={`${styles.topBarItem} ${styles.newCars}`}>
          <div> New Cars </div>
          <div className={styles.cityOptions}>
            <div className={styles.cityOption, styles.selectHeading}>Select The City </div>
            {cities.map((city, index) => {
              return <div key={index} className={styles.cityOption} id={city.city} onClick={cityHandler}>{city.displayName}</div>
            })}
          </div>
        </div>
        <div className={`${styles.topBarItem} ${styles.oldCars}`}>
          Old Cars
        </div>
        <div className={styles.topBarItem} onClick={() => setShowLoginModel(true)}>
          Login
        </div>
        <div className={styles.topBarItem} onClick={() => setSignupModel(true)}>
          Signup
        </div>
        <div className={styles.topBarItem} onClick={() => { history.push("/contact") }}>
          Contact Us
        </div>
      </div>
      {(showLoginModel) ?
        <Model className="smallModel" heading="Login" closeHandler={() => setShowLoginModel(false)} isOpen={showLoginModel}>
          <LoginForm />
        </Model> : <></>}
      {(showSignupModel) ?
        <Model className="smallModel" heading="Signup" closeHandler={() => setSignupModel(false)} isOpen={showSignupModel}>
          <SignupForm />
        </Model> : <></>}
    </Router>
  );
}
export default Topbar;