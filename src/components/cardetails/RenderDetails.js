import './RenderDetails.css';
import { toIndianCurrency } from '../../utils/toIndianCurrency';
export default function RenderDetails(props) {
    return (
        <div className="renderCarDetails">
            <h1 className="item carDetailsHeading">{props?.details?.make_year} {props?.details?.variant?.full_name}</h1>
            <div className="item carModel">
                {props?.details?.mileage} Kms&nbsp;&nbsp;&nbsp; {props?.details?.fuel_type}&nbsp;&nbsp;&nbsp; {props?.details?.transmission}
            </div>
            <div className="item priceProduct">{toIndianCurrency(props?.details?.productPrice)}</div>
            <div className="unutilized"><img alt="waste phot" /></div>
        </div>
    )
}