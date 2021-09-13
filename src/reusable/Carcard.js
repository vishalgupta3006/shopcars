import "./Carcard.css"

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
            <div className="imageWrapper"><img src={props.name.main_image.url} /></div>
            <div className="carDetails">
                <div className="carModel">{props.name.make_year} {props.name.make} {props.name.model} {props.name.variant}</div>
                <div className="miscDetails">
                    <span>{toKilometers(props.name.mileage)} Kms&nbsp;&nbsp;<li></li>&nbsp; </span> 
                    <span>{props.name.fuel_type} &nbsp; </span> 
                    <span>{props.name.transmission}</span>
                </div>
                <div className="carPrice">{toIndianCurrency(props.name.price)}</div>
                
            </div><hr />

        </div>
    );
}
export default Carcard;