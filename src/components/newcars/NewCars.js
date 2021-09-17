import { useEffect, useState } from "react";
import Carcard from "../reusable/Carcard";
import Topbar from "../topbar/Topbar";
import CarFilter from "../reusable/carFilter";
import "./NewCars.css";
import Loader from "../reusable/Loader";
const NewCars = () => {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(()=>{
        fetch("https://run.mocky.io/v3/404d85da-1f9f-4c3b-93a0-17cbe64417ad").
        then(res=>res.json()).
        then((result)=>{
            setItems(result);
            setIsLoaded(true);
        })
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
                        items.map((element) =>
                            <div className="carCardWrapper"><Carcard car={element}/></div>
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