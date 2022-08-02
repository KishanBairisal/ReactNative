import React from "react";
import { View, Dimensions, Text } from "react-native";
import FooterButton from "../FooterButtons";
import ImgPick from "./ImgPick";
export default function AccountScreen({ navigation }) {
  const { width, height } = Dimensions.get("screen");
  return (
    <View style={{ width, height, flex: 1 }}>
      <View style={{
        backgroundColor: 'Black', flex: 0.9
      }} >
        <ImgPick />
      </View>
      <View style={{ flex: 0.1 }}>
        <FooterButton navigation={navigation} />
      </View>
    </View>
  )
};