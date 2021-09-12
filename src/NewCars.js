import { useEffect, useState } from "react";
import Carcard from "./reusable/Carcard";
import Topbar from "./Topbar";
import data from "./constants/newCars.json";
const NewCars = () => {
    const [items, setItems] = useState([]);
    console.log(data);
    return (
        <div>
            <Topbar />
            <div className="cardContainer">
                {data.map((element) => 
                    <div><Carcard name={element}/></div>  
                )}
            </div>

        </div>
    );
}
export default NewCars;