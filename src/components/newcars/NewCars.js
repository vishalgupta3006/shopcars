import { useCallback, useEffect, useRef } from "react";
import Carcard from "../reusable/Carcard";
import Topbar from "../topbar/Topbar";
import CarFilter from "../reusable/carFilter";
import "./NewCars.css";
import Loader from "../reusable/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/methods/method";
import { incrementPage } from "../../redux/actions/action";

const NewCars = () => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.fetchCarsInfo.pageNumber);
    const isLoading = useSelector(state => state.fetchCarsInfo.isCarListLoading);
    const cars = useSelector(state => state.fetchCarsInfo.carList);
    const hasMore = useSelector(state => state.fetchCarsInfo.hasMore);
    const loadedpages = useSelector(state => state.fetchCarsInfo.loadedPages);
    const observer = useRef();
    const lastCarElement = useCallback(node => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(element => {
            if (element[0].isIntersecting && hasMore)
                    dispatch(incrementPage());
        })
        if (node) observer.current.observe(node);
    },[hasMore, isLoading, dispatch])

    useEffect(() => {
        if(page === loadedpages)
        return
        dispatch(fetchCars(page));
    }, [page,dispatch,loadedpages]);

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
                            (isLoading && cars === []) ? <Loader /> :
                            cars.map((element, index) => {
                                if (index + 1 === cars.length) {
                                    return <div className="carCardWrapper" ref={lastCarElement} key={element.id}><Carcard car={element} /></div>
                                }
                                else
                                    return <div className="carCardWrapper" key={element.id}><Carcard car={element} /></div>
                            })
                        }
                        { (isLoading) ? <Loader /> : <div>loaded</div>}
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