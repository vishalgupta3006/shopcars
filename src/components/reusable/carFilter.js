import "./CarFilter.css";
import MakeFilter from "./MakeFilter";
import { useSelector } from "react-redux";
const CarFilter = () => {
    var arrOfMake = [];
    const cars = useSelector(state => state.fetchCarsInfo.carList);
    const isLoading = useSelector(state => state.fetchCarsInfo.isCarListLoading);
    //eslint-disable-next-line
    cars.map((car)=>{
        arrOfMake.push(car.make);
    })
    arrOfMake = [...new Set(arrOfMake)];
    if(isLoading){
        arrOfMake = [];
    }
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