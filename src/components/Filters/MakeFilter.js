import { useDispatch } from 'react-redux';
//import { setMakeFilter } from '../../redux/actions/action';
import { carCompanies } from './carCompanies';

const MakeFilter = (props) => {
  const dispatch = useDispatch();

  const applyFilter = (e) => {
    console.log(e.target.value)
    //dispatch(setMakeFilter("ford"))
  }
  return (
    <div className="makeFilter">
      <div className="filterTitle">Make</div>

      {carCompanies.map((val, idx) =>
        <div className="filterItems" key={idx}>
          <label >
            <input type="checkbox" onChange={(e) => { applyFilter(e) }} />{val.displayName}
          </label>
        </div>
      )}
    </div>
  );
}
export default MakeFilter;