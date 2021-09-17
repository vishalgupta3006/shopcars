import { FaCar, FaHome, FaLocationArrow, FaMapMarker, FaSearchLocation } from "react-icons/fa";
import "./Carcard.css"
import { IconContext } from "react-icons";

const Carcard = props => {
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

    return (
        <div className="carCard">
            <div className="imageWrapper"><img src={props.car.main_image.url} /></div>
            <div className="carDetails">
                <div className="carModel">{props.car.make_year} {props.car.make} {props.car.model} {props.car.variant}</div>
                <div className="miscDetails">
                    <span>{toKilometers(props.car.mileage)} Kms&nbsp;&nbsp;&nbsp; </span>
                    <span>{props.car.fuel_type} &nbsp;&nbsp;&nbsp; </span>
                    <span>{props.car.transmission}</span>
                </div>
                <div className="carPrice">{toIndianCurrency(props.car.price)}</div>

            </div><hr />
            <div className="cardBottom">
                <div><IconContext.Provider value={{ className: "cardBottomIcon" }}>
                    <FaLocationArrow />
                </IconContext.Provider> {props.car.hub}</div>
                <div><IconContext.Provider value={{ className: "cardBottomIcon" }}>
                    <FaHome />
                </IconContext.Provider> Home Test Drive {(props.car.hub) ? "Available" : "Not Available"}</div>
            </div>
        </div>
    );
}
export default Carcard;