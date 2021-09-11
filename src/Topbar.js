import "./Topbar.css";
import { FaCar, FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";

const Topbar = () => {
    return (
        <div id="topbar">
            <div className="topBarItem logoContent">
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
                <input id = "searchInput" className="searchBar" type="text" placeholder="Search..."/>
                <IconContext.Provider value={{ className: "searchIcon",for:"searchInput" }}>
                        <label><FaSearch /></label>
                    </IconContext.Provider>
            </div>
            <div className=" topBarItem newCars">
                New Cars
            </div>
            <div className="topBarItem oldCars">
                Old Cars
            </div>
            <div className="topBarItem reviews">
                Reviews
            </div>
            <div className="topBarItem news">
                News
            </div>
            <div className="topBarItem call">
                <div id="callText">Call Now</div>
                <div id="callNumber">+91-9877377830</div>
            </div>
        </div>
    );
}
export default Topbar;