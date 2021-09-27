import Button from "../reusable/Button";
import InputField from "../reusable/InputField";
import "./ContactForm.css";
const ContactForm = () => {

    const formHandler = (e) =>{
        e.preventDefault()
        const formData = {       
            query: e.target[0].value,
            desciption: e.target[1].value,
            name: e.target[2].value,
            phone: e.target[3].value,
            email: e.target[4].value
         }
        console.log(formData)
    }
    return (
        <div id="contactFormWrapper">
            <div className="sectionHeading">
                Have a Query? Ask our Team
            </div>
            <div className="contentWrapper">
                <form className="contactForm" onSubmit={formHandler}>
                    <div className="formItem" id="selectWrapper">
                        <select id="selectItem">
                            <option className="queryOption" value="sell">Car Selling Query</option>
                            <option className="queryOption" value="buy">Car Buying Query</option>
                            <option className="queryOption" value="postSales">Post Sales Query</option>
                        </select>
                    </div>
                    <div className="formItem" id="textareaWrapper">
                        <textarea placeholder="Describe Your Query" id="textareaItem" />
                    </div>
                    <InputField type="text" placeholder="Enter Your Name" label="Name" />
                    <InputField type="tel" placeholder="Enter Your Phone Number" label="Phone Number" />
                    <InputField type="email" placeholder="Enter Your Email" label="Email" />
                    <Button label="Contact Us" className="btn-medium" type="submit" />
                </form>
            </div>
        </div>
    );
}
export default ContactForm;