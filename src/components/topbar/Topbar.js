import "./Topbar.css";
import { FaCar, FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import { BrowserRouter as Router } from "react-router-dom";
import { useHistory } from "react-router";
import { cities } from "../../constants/cities";
import { useDispatch } from "react-redux";
import { updateTheCity } from "../../redux/actions/action";
const Topbar = () => {
    const dispatch = useDispatch();
    const cityHandler = (e) => {
        console.log("HEY", e.target.id);
        dispatch(updateTheCity(e.target.id));
        history.push("/newcars/" + e.target.id)

    }
    const history = useHistory();
    return (
        <Router>
            <div id="topbar">
                <div className="topBarItem logoContent" onClick={() => { history.push("/") }}>
                    <div className="logoIconArea">
                        <IconContext.Provider value={{ className: "logoIcon" }}>
                            <div><FaCar /></div>
                        </IconContext.Provider>
                    </div>
                    <div className="logoText">
                        Shop Cars
                    </div>
                </div>
                <div className="topBarItem searchArea">
                    <input id="searchInput" className="searchBar" type="text" placeholder="Search..." />
                    <IconContext.Provider value={{ className: "searchIcon", for: "searchInput" }}>
                        <label><FaSearch /></label>
                    </IconContext.Provider>
                </div>
                <div className=" topBarItem newCars" onClick={() => { }}>
                    <div> New Cars </div>

                    <div className="cityOptions">
                        <div className="cityOption  selectHeading">Select The City </div>
                        {cities.map((city, index) => {
                            return <div key={index} className="cityOption" id={city.city} onClick={cityHandler}>{city.displayName}</div>
                        })}
                    </div>
                </div>
                <div className="topBarItem oldCars">
                    Old Cars
                </div>
                <div className="topBarItem reviews">
                    Reviews
                </div>
                <div className="topBarItem contact" onClick={() => { history.push("/contact") }}>
                    Contact Us
                </div>
                <div className="topBarItem call">
                    <div id="callText">Call Now</div>
                    <div id="callNumber">+91-9877377830</div>
                </div>
            </div>

        </Router>
    );
}
export default Topbar;