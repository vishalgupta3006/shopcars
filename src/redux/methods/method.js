import { fetchCarsError, fetchCarsPending, fetchCarsSuccess } from "../actions/action";

export function fetchCars() {
    return dispatch => {

        dispatch(fetchCarsPending());
        fetch("https://run.mocky.io/v3/404d85da-1f9f-4c3b-93a0-17cbe64417ad")
            .then(res => res.json())
            .then((res) => {
                if(res.error){
                    throw(res.error);
                }
                console.log("Inside the fetchUser method",res);
                dispatch(fetchCarsSuccess(res));
                return res;
                }
            )
            .catch(error=>{
                dispatch(fetchCarsError(error));
            })
    }
}