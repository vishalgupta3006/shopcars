import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Topbar from "../topbar/Topbar";
import { getCarDetails } from "../../redux/methods/carDetails";
import Page404 from '../reusable/404Page';
import Loader from '../reusable/Loader'
import styles from './Cardetails.module.css'
import ImageCarousel from "./ImageCarousel";
import RenderDetails from "./RenderDetails";
import CarOverview from "./CarOverview";
import Button from "../reusable/form fields/Button";
const CarDetails = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const {isCarLoading, isErrorInCarDetails, carDetails} = useSelector(state => state.fetchCarDetails);

  useEffect(() => {
    document.title = "Car Details";
    dispatch(getCarDetails(params.id));
  }, [params, dispatch])


  if (isCarLoading) {
    return <Loader />
  }
  else if (isErrorInCarDetails) {
    return <Page404 />
  }
  else {
    return (
      <div className={styles.carDetailsPage}>
        <Topbar />
        <div className={styles.carDetailsWrapper}>
          <div className={styles.leftSideWrapper}>
            <ImageCarousel />
            <CarOverview details ={carDetails.productDetail}/>
            <Button />
          </div>
          <div className={styles.rightSideWrapper}>
            <RenderDetails details={carDetails?.productDetail} />
          </div>
        </div>
      </div>
    )
  }
}
export default CarDetails;