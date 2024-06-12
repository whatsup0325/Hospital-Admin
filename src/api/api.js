import { http,fetchLocl} from "./request"

const baseUrl = import.meta.env.BASE_URL;
//接口demo
export const httpGetMap = (url,params) => {return fetchLocl("get", baseUrl + url + params);}
// export const loginApi = params => { return http("post",'/test/ste/', params)} 
// export const httpGaugeTriple = params => { return http("get",'/static/tempData/gaugeTriple.json', params)} 
