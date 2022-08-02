import React from "react";
import { View, Dimensions } from "react-native";
import FooterButton from "../FooterButtons";
import CameraComponent from "../CameraComponent";
export default function HRScreen({ navigation }) {
  const { width, height } = Dimensions.get("screen");
  return (
    <View style={{ flex: 1, height, width }}>
      <View style={{
        backgroundColor: 'blue', flex: 0.9
      }} >
        <CameraComponent />
      </View>
      <View style={{ flex: 0.1 }}>
        <FooterButton navigation={navigation} />
      </View>
    </View>
  )
};

