import Topbar from "../topbar/Topbar";
import "./Contact.css";
import ContactForm from "./ContactForm";
import ContactAddress from "./ContactAddress";

const Contact = () => {
    return (
        <div id="contactUs">
            <Topbar />
            <div className="contactBG">
                <div className="contactText">
                    Contact Us
                </div>
                <div className="contactInfo">
                    <div>vishalgupta3006@gmail.com</div>
                    <div>+91-9877377830</div>
                </div>
            </div>
            <div className ="formAndAddress">
                <div><ContactForm/></div>
                <div><ContactAddress/></div>
            </div>
            <div className="shopCarsLocations">
                VIEW SHOPCARS LOCATIONS
            </div>
        </div>
    );
}
export default Contact;