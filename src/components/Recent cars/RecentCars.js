import { useEffect, useState } from "react";
import Carcard from "../reusable/Carcard";
import Topbar from "../topbar/Topbar";
import { apiHandler } from "../../utils/APIhandler";
const RecentCars = () => {
  const [recentCarsList, setRecentCarsList] = useState([]);
  const recentCarsFetcher = () => {
    const recentCarsView = JSON.parse(localStorage.getItem("recentCarsView"));
    const ids = recentCarsView.toString();
    const response = apiHandler('GET','default', {ids: ids});
    setRecentCarsList(response);
    console.log("resposne of the API", response);
  }
  
  useEffect(()=>{
    recentCarsFetcher();
    console.log(recentCarsList);
  },[recentCarsList]);
  return (
    <div>
      <Topbar />
      {
        recentCarsList &&
        recentCarsList.map((item, index)=>{
          return <div key={index}><Carcard car={item} /></div>
        })
      }
      Recent
    </div>
  )
}
export default RecentCars;