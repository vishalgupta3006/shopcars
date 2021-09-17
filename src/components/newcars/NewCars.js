import { useEffect, useState } from "react";
import Carcard from "../reusable/Carcard";
import Topbar from "../topbar/Topbar";
import CarFilter from "../reusable/carFilter";
import "./NewCars.css";
import Loader from "../reusable/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/methods/method";
const NewCars = () => {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCars());
        fetch("https://run.mocky.io/v3/404d85da-1f9f-4c3b-93a0-17cbe64417ad")
        .then(res=>res.json())
        .then((res)=>{
            setItems(res);
            setIsLoaded(true);
        },
        (error) =>{
            setIsLoaded(true);
            setError(true);
        }
        )
    },[]);
    

    //const fil = nData.filter(item => item.make === "Hyundai");
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
                            
                            (!isLoaded)? <Loader/>:
                        items.map((element, index) =>
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