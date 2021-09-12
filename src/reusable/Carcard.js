import "./Carcard.css"

const Carcard = props =>{

    return(
        <div className="carCard">
            <div><img src={props.name.carImage} /></div>
            <div>{props.name.carModel}</div>
            <div>{props.name.carPrice}</div>
            <div>{props.name.carKMdrive}</div>
            <div>{props.name.carFuel}</div>
        </div>
    );
}
export default Carcard;