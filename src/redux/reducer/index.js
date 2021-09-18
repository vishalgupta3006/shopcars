import { fetchCarsInfo } from "./fetchCars"
import { fetchCarDetails } from "./fetchCarDetails"
import { combineReducers } from "redux"

export default combineReducers({
    fetchCarsInfo,
    fetchCarDetails
})