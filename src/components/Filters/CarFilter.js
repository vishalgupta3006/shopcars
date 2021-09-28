import "./CarFilter.css";
import MakeFilter from "./MakeFilter";
import { useSelector } from "react-redux";

const CarFilter = () => {
    const cars = useSelector(state => state.fetchCarsInfo.carList);
    var arrOfMake = cars.map((car)=>{
        return car.make
    })
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