import "./CarFilter.css";
import data from "../../constants/spinny.json";
import MakeFilter from "./MakeFilter";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const CarFilter = () => {
    var arrOfMake = [];
    const cars = useSelector(state => state.fetchCarsInfo.carList);
    const isLoading = useSelector(state => state.fetchCarsInfo.isCarListLoading);
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