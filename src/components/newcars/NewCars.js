import { useEffect, useState } from "react";
import Carcard from "../reusable/Carcard";
import Topbar from "../topbar/Topbar";
import CarFilter from "../reusable/carFilter";
import "./NewCars.css";
import Loader from "../reusable/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/methods/method";
const NewCars = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCars());
        
    },[]);
    const isLoading = useSelector(state=> state.fetchCarsInfo.isCarListLoading);
    const cars = useSelector(state=> state.fetchCarsInfo.carList);
    return (
        <div id="newCarsContainer">
            <div className="topbarContainer">
                <Topbar />
            </div>
            <div className="newCarsContentContainer">
                <div className="newCarsContent">
                    <div className="filterContainer">
                        <CarFilter />
                    </div>
                    <div className="cardContainer">
                        { 
                            (isLoading)? <Loader/>:
                        cars.map((element, index) =>
                            <div className="carCardWrapper" key = {index}><Carcard car={element}/></div>
                        )}
                    </div>
                </div>
            </div>
            <div className="waste">
                dfjrnjfkcnvjkefjk
            </div>
        </div>
    );
}
export default NewCars;