import { FaHome, FaLocationArrow } from "react-icons/fa";
import styles from "./Carcard.module.css"
import { IconContext } from "react-icons";
import { useHistory } from "react-router";

const Carcard = (props) => {
    const toIndianCurrency = (num) => {
        let curr = num.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
        });
        curr = curr.substring(0, curr.indexOf('.'));
        return curr;
    };

    const toKilometers = (num) => {
        let curr = num.toLocaleString('en-IN');
        return curr;
    };

    const history = useHistory();
    return (
        <div className={styles.carCard} onClick={() => { history.push("/car-details/" + props.car.id) }}>
            <div className={styles.imageWrapper}><img alt="car_image" src={props.car.main_image.url} /></div>
            <div className={styles.carDetails}>
                <div className={styles.carModel}>{props.car.make_year} {props.car.make} {props.car.model} {props.car.variant}</div>
                <div className={styles.miscDetails}>
                    <span>{toKilometers(props.car.mileage)} Kms&nbsp;&nbsp;&nbsp; </span>
                    <span>{props.car.fuel_type} &nbsp;&nbsp;&nbsp; </span>
                    <span>{props.car.transmission}</span>
                </div>
                <div className={styles.carPrice}>{toIndianCurrency(props.car.price)}</div>

            </div>
            <div className={styles.cardBottom}>
                <div><IconContext.Provider value={{ className: styles.cardBottomIcon }}>
                    <FaLocationArrow />
                </IconContext.Provider> {props.car.hub}</div>
                <div><IconContext.Provider value={{ className: styles.cardBottomIcon }}>
                    <FaHome />
                </IconContext.Provider> Home Test Drive {(props.car.hub) ? "Available" : "Not Available"}</div>
            </div>
        </div>
    );
}
export default Carcard;