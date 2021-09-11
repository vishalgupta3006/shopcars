import "./Contact.css";
import { IconContext } from "react-icons/lib";
import { FaBuilding, FaSearch } from "react-icons/fa";
const ContactAddress = () => {
    return (
        <div id="contactAddressWrapper">
            <div className="Heading">
                Visit Us Here
            </div>
            <div className="contentWrapper">
                <div className="address">
                    <div className="addressHeading">
                        <FaBuilding />
                        <div>&nbsp;&nbsp;Corporate Office</div>
                    </div>
                    <div className="address">
                        801 - 806, 8th Floor, Vipul Square,<br/>
                        Sushant Lok B Block, Phase - 1,<br/>
                        Gurugram, Haryana - 122001<br/>
                        <a href="https://www.google.co.in/maps">View On Google Map &#62;</a>
                    </div>
                </div>
                <div className="mapIframe"><iframe loading="lazy" src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyCpv-nr7sgbE_Peqq8ztFMCa46xTbw_GUM&q=Space+Needle,Seattle+WA"}></iframe></div>
            </div>

        </div>
    );
}
export default ContactAddress;