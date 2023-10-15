import axios from "axios"

const BASE_URL="https://maps.googleapis.com/maps/api/place"
const API_KEY="AIzaSyAt5LSLxKNWF12qk1kfVsDEkmLXAnN1y_4"


const nearByPlace=(lat,lng,type)=>axios.get(BASE_URL+
    "/nearbysearch/json?"+
    "&location="+lat+"%"+lng+"&radius=1500&type="+"restaurant"
    +"&key="+API_KEY)


    const searchByText=(searchText)=>axios.get(BASE_URL+
        "/textsearch/json?query="+searchText+
  "&key="+API_KEY)

  console.log(nearByPlace());
export default{
    nearByPlace,
    searchByText
}