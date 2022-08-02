import React, { useState } from "react";
import { View, Dimensions, Text, Animated, StyleSheet, PanResponder, AsyncStorageStatic, Button } from "react-native";
import FooterButton from "../FooterButtons";
import Icon from "../Icon";
// import GetRandomUsers from "../Axios";

export default function AdminScreen({ navigation }) {

  [item, setItem] = useState('loading');

  const { width, height } = Dimensions.get("screen");
  const position = new Animated.ValueXY({ x: 0, y: 0 });//for animation
  Animated.spring(position, {// timing,spring,parallel,sequence,loop,modulo,subtract,createAnimatedComponent,decay
    toValue: { x: 320, y: 200 }, speed: 0.1,
    duration: 5000,
    useNativeDriver: true, bounciness: 50
  }).start();

  const pan = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    useNativeDriver: true,
    onPanResponderMove: Animated.event([
      null,
      { dx: position.x, dy: position.y }
    ]),
    onPanResponderRelease: () => {
      // position.setValue({ x: 0, y: 0 })

      Animated.spring(position, { useNativeDriver: true, toValue: { x: 0, y: 0 } }).start()
    }
  })

  const rotatex = position.x.interpolate({
    inputRange: [0, 100],
    outputRange: ["0deg", "360deg"]
  });
  const rotatey = position.y.interpolate({
    inputRange: [0, 100],
    outputRange: ["0deg", "360deg"]
  });

  const storeData = async () => {
    try {
      await AsyncStorageStatic.setItem('key', 'cnq');
      setItem('key');
    }
    catch (error) {
      console.log(error)
    }
    console.log(item)
  };

  // const deleteData = async () => {
  //   try {
  //     AsyncStorageStatic.removeItem('mykey', () => {
  //       console.log("deleted")
  //       setItem('mykey')
  //     })
  //   }
  //   catch (error) {
  //   }
  //   console.log(item)
  // }
  return (
    <View style={{ flex: 1, width, height }}>
      <View style={{
        backgroundColor: 'white', flex: 0.9
      }} >
        <Text style={{ fontSize: 30, fontFamily: "Almarai ExtraBold" }}>Handling Text Input</Text>
        <Icon name="office" style={{ alignSelf: 'center', justifyContent: 'center', fontSize: 50 }} />
        <Text style={{ fontSize: 20, fontFamily: "DancingScript-Bold" }}>
          TextInput is a Core Component that allows the user to enter text.
          It has an onChangeText prop that takes a function to be called every time the text changed,
          and an onSubmitEditing prop that takes a function to be called when the text is submitted.
          For example, let's say that as the user types, you're translating their words into a different language.
          In this new language, every single word is written the same way: 🍕.
          So the sentence "Hello there Bob" would be translated as "🍕 🍕 🍕".
        </Text>
        {/* <GetRandomUsers /> */}
        <Animated.View {...pan.panHandlers} style={{
          height: 50, width: 50, backgroundColor: 'black', borderRadius: 5, alignItems: 'center', justifyContent: 'center',
          transform: [{ translateX: position.x },
          { translateY: position.y },
          { rotate: rotatey }
          ]
        }} />
        <View style={{ justifyContent: "center", alignItems: 'center' }}>
          <Button title="store it" onPress={storeData} />
          <Text>{item}</Text>
        </View>
      </View>
      <View style={{ flex: 0.1 }}>
        <FooterButton navigation={navigation} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 12,
    lineHeight: 24,
    fontWeight: 'bold'
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: 'black',
    borderRadius: 5,
  }
})