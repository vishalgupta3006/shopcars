import Button from "../reusable/Button";
import InputField from "../reusable/InputField";
import SelectField from "../reusable/SelectField";
import TextareaField from "../reusable/TextareaField";
import styles from "./ContactForm.module.css";
import { contactFormQueryTypes } from "./constants/contactFormQueryTypes";
const ContactForm = () => {
  const formHandler = (e) => {
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