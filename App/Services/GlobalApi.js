import axios from "axios"
import {GOOGLE_API_KEY} from "@env"

const BASE_URL="https://maps.googleapis.com/maps/api/place"
const API_KEY= ""

const rough = () => axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&key=AIzaSyAGyweaLbtgoLQIKhKZtlsxhs7jbvt3PHA")

console.log(rough());


const nearByPlace=(lat,lng,type)=>axios.get(BASE_URL+
    "/nearbysearch/json?"+
    "&location="+"37.4219983"+"%"+"-122.084"+"&radius=1500&type="+"restaurant"
    +"&key="+API_KEY)


    const searchByText=(searchText)=>axios.get(BASE_URL+
        "/textsearch/json?query="+searchText+
  "&key="+API_KEY)

//   console.log(nearByPlace());
//   console.log(GOOGLE_API_KEY, BASE_URL+
//     "/nearbysearch/json?"+
//     "&location="+"lat"+"%"+"lng"+"&radius=1500&type="+"restaurant"
//     +"&key="+API_KEY);

export default{
    nearByPlace,
    searchByText
}