import { CARS_FETCH_ERROR, CARS_FETCH_PENDING, CARS_FETCH_SUCCESS, INCREAMENT_PAGE, CLEAR_DATA, UPDATE_CITY } from "../actions/action";

const initialState = {
    carList: [],
    isCarListLoading: false,
    isErrorInCarList: false,
    hasMore: true,
    pageNumber: 1,
    loadedPages: 0,
    selectedCity:'delhi-ncr'

}
export function fetchCarsInfo(state = initialState, action) {
    switch (action.type) {
        case CARS_FETCH_PENDING:
            return {
                ...state,
                isCarListLoading: true
            }
        case CARS_FETCH_SUCCESS:
            return {
                ...state,
                carList: [...new Set([...state.carList, ...action.list])],
                isCarListLoading: false,
                hasMore: action.hasMore,
                loadedPages: state.pageNumber
            }

        case CARS_FETCH_ERROR:
            return {
                ...state,
                isCarListLoading: false,
                isErrorInCarList: true
            }
        case INCREAMENT_PAGE:
            return {
                ...state,
                pageNumber: state.pageNumber + 1
            }
        case CLEAR_DATA:
            return {
                ...state,
                carList: [],
                pageNumber: 1,
                loadedPages: 0
            }
        case UPDATE_CITY:
            if(action.city !== state.selectedCity)
            return{
                ...state,
                selectedCity: action.city,
                pageNumber: 1,
                carList: []
            }
            else{
                return state;
            }
        default:
            return state;
    }
}