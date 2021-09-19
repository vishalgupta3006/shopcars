import { fetchCarsError, fetchCarsPending, fetchCarsSuccess, initialLoading } from "../actions/action";
export function fetchCars(pageNumber) {
    var hasMore = true;
    return dispatch => {
        dispatch(fetchCarsPending());
        fetch("https://api.spinny.com/api/c/listings/?city=delhi-ncr&product_type=cars&category=used&&page=" + pageNumber)
            .then(res => res.json())
            .then((res) => {
                if (res.error) {
                    throw (res.error);
                }
                if (res.next === null)
                    hasMore = false;
                if (pageNumber === 1) {
                    dispatch(initialLoading(res.results, hasMore));
                }
                else {
                    dispatch(fetchCarsSuccess(res.results, hasMore));
                }
                return null;
            }
            )
            .catch(error => {
                console.log("there is error");
                dispatch(fetchCarsError(error));
            })
    }
}