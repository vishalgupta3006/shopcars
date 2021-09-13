import { useEffect, useState } from "react";
import Carcard from "./reusable/Carcard";
import Topbar from "./Topbar";
import data from "./constants/newCars.json";
import nData from "./constants/spinny.json";
const NewCars = () => {
    const [items, setItems] = useState([]);
    console.log(data);
    console.log(nData);
    return (
        <div>
            <Topbar />
            <div className="cardContainer">
                {nData.map((element) => 
                    <div className="carCardWrapper"><Carcard name={element}/></div>  
                )}
            </div>

        </div>
    );
}
export default NewCars;