import axios from "axios";
import { fetchCarsError, fetchCarsPending, fetchCarsSuccess } from "../actions/action";

export function fetchCars(pageNumber,city) {
    var hasMore = true;
    return dispatch => {
        dispatch(fetchCarsPending());
        axios({
            method: "GET",
            url: "https://api.spinny.com/api/c/listings/",
            params: {product_type: "cars", category: "used", city: city, page: pageNumber, make: "" }
        })
            .then(res => {
                if (res.error) {
                    throw res.error
                }
                if (res.data.next === null) {
                    hasMore = false;
                }
                dispatch(fetchCarsSuccess(res.data.results, hasMore));
            })
            .catch(error => {
                console.log("Error", error);
                dispatch(fetchCarsError(error));
            })
    }
}

// export function fetchCarsOld(pageNumber) {
//     var hasMore = true;
//     return dispatch => {
//         dispatch(fetchCarsPending());
//         fetch("https://api.spinny.com/api/c/listings/?city=delhi-ncr&product_type=cars&category=used&&page=" + pageNumber)
//             .then(res => res.json())
//             .then((res) => {
//                 console.log(res.results);
//                 if (res.error) {
//                     throw (res.error);
//                 }
//                 if (res.next === null)
//                     hasMore = false;
//                 if (pageNumber === 1) {
//                     dispatch(initialLoading(res.results, hasMore));
//                 }
//                 else {
//                     dispatch(fetchCarsSuccess(res.results, hasMore));
//                 }
//                 return null;
//             }
//             )
//             .catch(error => {
//                 console.log("there is error");
//                 dispatch(fetchCarsError(error));
//             })
//     }
// }