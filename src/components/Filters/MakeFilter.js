
const MakeFilter = (props) => {

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