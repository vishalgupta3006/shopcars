export const CAR_DETAILS_PENDING = "CAR_DETAILS_PENDING";
export const CAR_DETAILS_SUCCESS = "CAR_DETAILS_SUCCESS";
export const CAR_DETAILS_ERROR = "CAR_DETAILS_ERROR";
export const CLEAR_CAR_DETAILS = "CLEAR_CAR_DETAILS";

export function carDetailsPending() {
    return {
        type: CAR_DETAILS_PENDING
    }
}
export function carDetailsSuccess(data) {
    return {
        type: CAR_DETAILS_SUCCESS,
        data: data
    }
}
export function carDetailsError(error) {
    return {
        type: CAR_DETAILS_ERROR,
        error: error
    }
}
export function clearCarDetails() {
    return {
        type: CLEAR_CAR_DETAILS,
    }
}