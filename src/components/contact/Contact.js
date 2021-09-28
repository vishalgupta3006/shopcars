import Topbar from "../topbar/Topbar";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";
import ContactAddress from "./ContactAddress";
import { useEffect } from "react";
import { contactInfo } from "./constants/contactInfo";
import Button from "../reusable/Button";

const Contact = () => {
  useEffect(() => { document.title = "Contact Us" }, []);
  const shopcarsLocationHandler = () => {
    console.log("Trying to Get shopcar locations");
  }
  return (
    <div className={styles.contactUsPage}>
      <Topbar />
      <div className={styles.contactBG}>
        <div className={styles.contactText}>
          Contact Us
        </div>
        <div className={styles.contactInfo}>
          <div>{contactInfo.email}</div>
          <div>{contactInfo.phone}</div>
        </div>
      </div>
      <div className={styles.formAndAddress}>
        <ContactForm />
        <ContactAddress />
      </div>
      <Button type="button" label="VIEW SHOPCARS LOCATIONS" className="btn-small" onclickhandler={() => shopcarsLocationHandler()} />
    </div>
  );
}
export default Contact;