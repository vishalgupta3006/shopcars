import styles from "./ContactAddress.module.css";
import { FaBuilding, FaCaretRight } from "react-icons/fa";
import Iframe from "../reusable/Iframe";
const ContactAddress = () => {
  const googleMapLink = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCpv-nr7sgbE_Peqq8ztFMCa46xTbw_GUM&q=place_id:ChIJ-VRVlRoUrjsR9HBLkQ3qxY4";
  return (
    <div className={styles.contactAddressWrapper}>
      <h1 className={styles.sectionHeading}>
        Visit Us Here
      </h1>
      <div className={styles.addressWrapper}>
        <div className={styles.addressDetails}>
          <div className={styles.addressHeading}>
            <FaBuilding />
            <div>Corporate Office</div>
          </div>
          <div className="address">
            801 - 806, 8th Floor, Vipul Square,<br />
            Sushant Lok B Block, Phase - 1,<br />
            Gurugram, Haryana - 122001<br />
          </div>
          <a href="https://www.google.co.in/maps">
            <div className={styles.mapLink}>View On Google Map <FaCaretRight />
            </div>
          </a>
        </div>
        <Iframe title="Google Maps" loading="lazy" src={googleMapLink} height="280px" />
      </div>

    </div>
  );
}
export default ContactAddress;