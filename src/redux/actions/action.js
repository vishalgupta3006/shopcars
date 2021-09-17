export const CARS_FETCH_PENDING = "CARS_FETCH_SUCCESS";
export const CARS_FETCH_SUCCESS = "CARS_FETCH_SUCCESS";
export const CARS_FETCH_ERROR = "CARS_FETCH_SUCCESS";

export function fetchCarsPending() {
    return {
        type: CARS_FETCH_PENDING
    }
}
export function fetchCarsSuccess(list) {
    return {
        type: CARS_FETCH_SUCCESS,
        list: list
    }
}
export function fetchCarsError(error) {
    return {
        type: CARS_FETCH_ERROR,
        error: error
    }
}