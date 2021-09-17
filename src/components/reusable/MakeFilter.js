import { useSelector } from "react-redux";

const MakeFilter = (props) => {
    //console.log(props);
    const item = useSelector(state => state.fetchCarsInfo.carList);
    console.log("Inside the filter",item)
    return (
        <div className="makeFilter">
            <div className="filterTitle">Make</div>
            {props.items.map((val, idx) =>
                <div key={idx} className="filterItems">{val}</div>
            )}
        </div>
    );
}
export default MakeFilter;