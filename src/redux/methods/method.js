import { fetchCarsSuccess } from "../actions/action";

export function fetchCars() {
    return dispatch => {
        fetch("https://run.mocky.io/v3/404d85da-1f9f-4c3b-93a0-17cbe64417").
            then(res => res.json()).
            then((res) => {
                console.log(res);
                dispatch(fetchCarsSuccess(res.data));
                return res.data;
                }
            )
    }
}