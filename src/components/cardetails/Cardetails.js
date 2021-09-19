import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Topbar from "../topbar/Topbar";
import { getCarDetails } from "../../redux/methods/carDetails";
import Page404 from '../reusable/404Page';
import Loader from '../reusable/Loader'
import './Cardetails.css'
import ImageCarousel from "./ImageCarousel";
const CarDetails =() =>{

    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    //eslint-disable-next-line
    useEffect(()=>{
        dispatch(getCarDetails(params.id));
    },[])
    const car_details = useSelector(state=> state.fetchCarDetails.carDetails);
    const isCarLoading = useSelector(state=> state.fetchCarDetails.isCarLoading);
    const carDetailsError = useSelector(state=> state.fetchCarDetails.isErrorInCarDetails);
    if(isCarLoading){
        return(
            <Loader />
        )
    }
    else if (!carDetailsError){
        {console.log(car_details)}
    return(
        
        <div id = "carDetailsPage">
            <div className="topbarWrapper"><Topbar /></div>
            <div className="carDetailsWrapper">
                <div className="carouselWrapper">
                <ImageCarousel/>

                </div>
                <div className="detailsSection">Details</div>
            </div>
            

        </div>
    )}
    else
        history.push("/error")
    return("error");
}
export default CarDetails;