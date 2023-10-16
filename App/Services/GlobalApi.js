import axios from "axios";
import { GOOGLE_API_KEY } from "@env";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const API_KEY = GOOGLE_API_KEY;

const nearByPlace = async (lat, lng, type) =>
  await axios.get(
    BASE_URL +
      "/nearbysearch/json?" +
      "location=" +
      lat +
      "," +
      lng +
      "&radius=1500&type=" +
      type +
      "&key=" +
      API_KEY
  );

const searchByText = (lat, lng, searchText) =>
  axios.get(
    BASE_URL +
      "/textsearch/json?" +
      "location=" +
      lat +
      "," +
      lng +
      "&query=" +
      searchText +
      "&key=" +
      API_KEY
  );

export default {
  nearByPlace,
  searchByText,
};
