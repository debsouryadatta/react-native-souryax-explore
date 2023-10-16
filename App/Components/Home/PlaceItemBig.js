import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";
import { AntDesign } from "@expo/vector-icons";
// import HorizontalLine from "./HorizontalLine";
import { GOOGLE_API_KEY } from "@env";

export default function PlaceItemBig({ place }) {
const API_KEY = GOOGLE_API_KEY;


  return (
    <View style={{marginTop:20}}>
     {place?.photos?  <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo" +
            "?maxwidth=400" +
            "&photo_reference=" +
            place?.photos[0]?.photo_reference +
            "&key=" +
            API_KEY
        }}
        style={{ width: "100%", height: 130, borderRadius: 15 }}
      />:null}
      <Text
        numberOfLines={2}
        style={{ fontSize: 18, marginBottom: 2, fontFamily: "-bold" }}
      >
        {place.name}
      </Text>
      <Text
        style={{ fontSize: 16, marginBottom: 5, color: Colors.DARK_GRAY }}
        numberOfLines={2}
      >
        {place.vicinity}
      </Text>
      <View
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            flexDirection: "row",
          }}
        >
          <AntDesign name="star" size={20} color={Colors.YELLOW} />
          <Text>{place.rating}</Text>
        </View>
          {/* <HorizontalLine/> */}
    </View>
  );
}