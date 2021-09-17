export const CARS_FETCH_SUCCESS = "CARS_FETCH_SUCCESS";

export function fetchCarsSuccess(list) {
    return {
        type: CARS_FETCH_SUCCESS,
        list: list
    }
}