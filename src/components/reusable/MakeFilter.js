const MakeFilter = (props) => {
    //console.log(props);
    return (
        <div className="makeFilter">
            <div className="filterTitle">Make</div>
            {props.items.map((val, idx) =>
                <div id={idx} className="filterItems">{val}</div>)}
        </div>
    );
}
export default MakeFilter;