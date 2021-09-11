import { FaCarrot, FaSearch } from "react-icons/fa";
import "./ContactForm.css";
import { IconContext } from "react-icons";
const ContactForm = () => {
    return (
        <div id="contactFormWrapper">
            <div className="Heading">
                Have a Query? Ask our Team
            </div>
            <div className="contentWrapper">
                <form>
                    <div className="formItem" id="selectWrapper">
                        <select id="selectItem">
                            <option value="sell">Car Selling Query</option>
                            <option value="buy">Car Buying Query</option>
                            <option value="postSales">Post Sales Query</option>
                        </select>
                    </div>
                    <div className="formItem" id="textareaWrapper">
                        <textarea placeholder="Describe Your Query" id="textareaItem" />
                    </div>
                    <div className="formItem">
                        <input type="text" placeholder="Enter Your Name" required/>
                    </div>
                    <div className="formItem">
                        <input type="tel" placeholder="Enter Your Phone Number" required/>
                    </div>
                    <div className="formItem">
                        <input type="email" placeholder="Enter Your Email" required />
                    </div>
                    <div className="formItem submitButtonWrapper">
                        <button type="submit" className="submitButton">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ContactForm;