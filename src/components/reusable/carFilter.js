import "./CarFilter.css";
import data from "../../constants/spinny.json";
import MakeFilter from "./MakeFilter";
const CarFilter = () => {
    let arrOfMake = [];
    data.map((car)=>{arrOfMake.push(car.make)});
    arrOfMake = [...new Set(arrOfMake)];
    

    return(
        <div className="carFilterWrapper">
            <div className="carFilter">
                <div className="makeFilterWrapper">
                        <MakeFilter items={arrOfMake}/>
                </div>
            </div>
        </div>
    );
}
export default CarFilter;