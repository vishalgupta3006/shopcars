import axios from "axios";
const allURLTypes = {
  default: "https://api.spinny.com/api/c/listings/"
}
const axiosTest = (method, urlType, params) => {
  return axios({
    method: method,
    url: allURLTypes[urlType],
    params: params
  })
}
export const apiHandler = (method, urlType, params) => {
  var results;
  const promiseR = axiosTest(method, urlType, params);
  const responseP = promiseR.then((response)=>response.data)
  return responseP.PromiseResult;
}