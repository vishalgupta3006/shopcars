import { useCallback, useEffect, useRef } from "react";
import Topbar from "../topbar/Topbar";
import "./NewCars.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/methods/method";
import { clearTheList, incrementPage } from "../../redux/actions/action";
import Cardlist from "./Cardlist";
import CarFilter from "../Filters/CarFilter";

const NewCars = () => {
    const { pageNumber,
        isCarListLoading,
        carList,
        hasMore,
        selectedCity
    } = useSelector(state => state.fetchCarsInfo);
    const dispatch = useDispatch();

    //Function for Pagination
    const observer = useRef();
    const lastCarElement = useCallback(node => {
        if (isCarListLoading) return
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(element => {
            if (element[0].isIntersecting && hasMore) {
                dispatch(incrementPage());
            }
        })
        if (node) observer.current.observe(node);
    }, [hasMore, isCarListLoading, dispatch])

    useEffect(() => {
        dispatch(fetchCars(pageNumber, selectedCity));
    }, [pageNumber, selectedCity, dispatch]);

    //To Clear the List to prevent memory leak issues
    useEffect(() => {
        document.title = "Buy New Cars";
        return () => dispatch(clearTheList());
    }, [dispatch])
    return (
        <div id="newCarsContainer">
            <Topbar />
            <div className="newCarsContent">
                <CarFilter />
                <Cardlist carList={carList} isCarListLoading={isCarListLoading} lastCarElement={lastCarElement} />
            </div>
            <div className="waste">
                This is a waste class just to know that the page has reached the end
            </div>
        </div>
    );
}
export default NewCars;