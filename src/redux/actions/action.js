export const CARS_FETCH_PENDING = "CARS_FETCH_PENDING";
export const CARS_FETCH_SUCCESS = "CARS_FETCH_SUCCESS";
export const CARS_FETCH_ERROR = "CARS_FETCH_ERROR";
export const INCREAMENT_PAGE = "INCREAMENT_PAGE";
export const CLEAR_DATA = "CLEAR_DATA";
export const UPDATE_CITY ="UPDATE_CITY";
export const SET_MAKE_FILTER = "SET_MAKE_FILTER";

export function fetchCarsPending() {
    return {
        type: CARS_FETCH_PENDING
    }
}
export function fetchCarsSuccess(list, hasMore) {
    return {
        type: CARS_FETCH_SUCCESS,
        list: list,
        hasMore: hasMore
    }
}
export function fetchCarsError(error) {
    return {
        type: CARS_FETCH_ERROR,
        error: error
    }
}
export function incrementPage() {
    return {
        type: INCREAMENT_PAGE
    }
}
export function clearTheList(){
    return{
        type: CLEAR_DATA
    }
}
export function updateTheCity(city){
    return{
        type: UPDATE_CITY,
        city: city
    }
}
export function setMakeFilter(makeFilter){
    return{
        type: SET_MAKE_FILTER,
        makeFilter: makeFilter
    }
}