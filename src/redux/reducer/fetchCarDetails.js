import { CAR_DETAILS_ERROR, CAR_DETAILS_PENDING, CAR_DETAILS_SUCCESS } from "../actions/carDetails";

const initialState = {
    carDetails: {},
    isCarLoading: false,
    isErrorInCarDetails: false
}

export function fetchCarDetails(state = initialState, action) {
    switch (action.type) {
        case CAR_DETAILS_PENDING:
            return {
                ...state,
                isCarLoading: true,
                isErrorInCarDetails: false
            }
        case CAR_DETAILS_SUCCESS:
            return {
                ...state,
                carDetails: action.data,
                isCarLoading: false
            }
        case CAR_DETAILS_ERROR:
            return {
                ...state,
                isErrorInCarDetails: true,
                isCarLoading: false
            }
        default:
            return state
    }
}