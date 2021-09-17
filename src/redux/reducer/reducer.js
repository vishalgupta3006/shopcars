import { combineReducers } from "redux";
import { CARS_FETCH_SUCCESS } from "../actions/action";

const initialState = {
    carList: []
}
export function fetchCarsInfo(state = initialState, action) {
    switch (action.type){
        case CARS_FETCH_SUCCESS:
            return {
                ...state,
                carList: action.list
            }
        default:
            return state;
    }
}
export default combineReducers({
    fetchCarsInfo
})