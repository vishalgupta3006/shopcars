import Button from "../reusable/form fields/Button";
import InputField from "../reusable/form fields/InputField";
import SelectField from "../reusable/form fields/SelectField";
import TextareaField from "../reusable/form fields/TextareaField";
import styles from "./ContactForm.module.css";
import { contactFormQueryTypes } from "./constants/contactFormQueryTypes";
const ContactForm = () => {
  const dataToServer = (formData) =>{
    const options ={
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }
    fetch('https://shopcars-backend.herokuapp.com/contact', options)
    .then(response =>response.json())
    .then(response => console.log(response)).
    catch(err=>console.log(err));
}
  const formHandler = (e) => {
    e.preventDefault()
    const formData = {
      queryType: e.target[0].value,
      description: e.target[1].value,
      name: e.target[2].value,
      phone: e.target[3].value,
      email: e.target[4].value
    }
    dataToServer(formData);
    console.log()
  }
  return (
    <div className={styles.contactFormWrapper}>
      <h1 className={styles.sectionHeading}>
        Have a Query? Ask our Team
      </h1>
      <form className={styles.contactForm} onSubmit={formHandler}>
        <SelectField options={contactFormQueryTypes} label="Query Type" />
        <TextareaField placeholder="Describe Your Query" label="Describe" />
        <InputField type="text" placeholder="Enter Your Name" label="Name" />
        <InputField type="tel" placeholder="Enter Your Phone Number" label="Phone Number" />
        <InputField type="email" placeholder="Enter Your Email" label="Email" />
        <Button label="Contact Us" className="btn-medium" type="submit" />
      </form>
    </div>
  );
}
export default ContactForm;