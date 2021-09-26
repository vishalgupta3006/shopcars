import { fetchCarsInfo } from "./fetchCars"
import { fetchCarDetails } from "./fetchCarDetails"
import { generalModal } from "./Model"
import { combineReducers } from "redux"

export default combineReducers({
    fetchCarsInfo,
    fetchCarDetails,
    generalModal
})