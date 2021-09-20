import "./Topbar.css";
import { FaCar, FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import { BrowserRouter as Router} from "react-router-dom";
import { useHistory } from "react-router";

const Topbar = () => {
    const history = useHistory();
    return (
        <Router>
            <div id="topbar">
                    <div className="topBarItem logoContent"  onClick={ ()=>{ history.push("/")}}>
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
                    <div className=" topBarItem newCars" onClick={ ()=>{ history.push("/newcars")}}>
                        <div> New Cars </div>
                        <div className="cityOptions">
                        <div className="cityOption  selectHeading">Select The City </div>
                        <div className="cityOption">Delhi</div>
                        <div className="cityOption">Mumbai</div>
                        <div className="cityOption">Chennai</div>
                        <div className="cityOption"> Kolkata</div>
                        </div>
                    </div>
                <div className="topBarItem oldCars">
                    Old Cars
                </div>
                <div className="topBarItem reviews">
                    Reviews
                </div>
                <div className="topBarItem contact" onClick={ ()=>{ history.push("/contact")}}>
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