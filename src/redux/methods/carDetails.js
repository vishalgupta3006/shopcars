import { carDetailsError, carDetailsPending, carDetailsSuccess } from "../actions/carDetails";

export function getCarDetails(params) {
    return dispatch => {

        dispatch(carDetailsPending());
        fetch(`https://www.spinny.com/api/product-detail/fetch-page-data/${params}`)
            .then(res => res.json())
            .then((res) => {
                if(res.error){
                    throw(res.error);
                }
                dispatch(carDetailsSuccess(res));
                //console.log(res);
                return res;
                }
            )
            .catch(error=>{
                dispatch(carDetailsError(error));
            })
    }
}
