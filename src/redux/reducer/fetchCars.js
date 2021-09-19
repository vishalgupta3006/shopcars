import { CARS_FETCH_ERROR, CARS_FETCH_PENDING, CARS_FETCH_SUCCESS, INITIAL_LOAD, INCREAMENT_PAGE } from "../actions/action";

const initialState = {
    carList: [],
    isCarListLoading: false,
    isErrorInCarList: false,
    hasMore: true,
    pageNumber: 1,
    loadedPages: 0

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
        case INITIAL_LOAD:
            return {
                ...state,
                carList: [...new Set(action.list)],
                isCarListLoading: false,
                hasMore: action.hasMore,
                loadedPages: state.pageNumber
            }
        case INCREAMENT_PAGE:
            return {
                ...state,
                pageNumber: state.pageNumber + 1
            }
        default:
            return state;
    }
}