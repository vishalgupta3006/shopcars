import './RenderDetails.css';
import unutilizedImg from '../../images/toBeThere.jpg'
export default function RenderDetails(props) {
    console.log(props.details);
    const toIndianCurrency = (num) => {
        let curr = num.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
        });
        curr = curr.substring(0, curr.indexOf('.'));
        return curr;
    };
    return (
        <div className="renderCarDetails">
            <h1 className="item carDetailsHeading">{props.details.make_year} {props.details.variant.full_name}</h1>
            <div className="item carModel">
                {props.details.mileage} Kms&nbsp;&nbsp;&nbsp; {props.details.fuel_type}&nbsp;&nbsp;&nbsp; {props.details.transmission}
            </div>
            <div className="item priceProduct">{toIndianCurrency(props.details.productPrice)}</div>
            <div className="unutilized"><img src={unutilizedImg} /></div>
        </div>
    )
}