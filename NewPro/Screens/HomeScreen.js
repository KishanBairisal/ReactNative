import React, { useState } from "react";
import axios from 'axios';
import {
  ImageBackground, View, StyleSheet, Dimensions, Text, Button, TextInput
} from "react-native";
// import Constants from "expo-constants";
import FooterButton from "../FooterButtons";
import BG from '../assets/ProjectImages/mback.jpg'


export default function HomeScreen({ navigation }) {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangenameHandler = (fullName) => {
    setFullName(fullName);
  };

  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };

  const onSubmitHandler = async (event) => {
    if (!fullName.trim() || !email.trim()) {
      alert("Name or Email is Invalid!!!");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/api/users`, {
        fullName,
        email
      });
      if (response.status === 201) {
        alert(`you have created: ${JSON.stringify(response.data)}`);
        setIsLoading(false);
        setFullName("");
        setEmail("");
      }
      else {
        throw new Error("An Error has occured");
      }
    }
    catch (error) {
      alert("An Error has Occured");
      setIsLoading(false);
    }
  };

  const { width, height } = Dimensions.get('screen');
  return (
    <View style={{ width, height, flex: 1 }} >
      <ImageBackground source={BG} resizeMode="cover" style={{
        flex: 1,
        width: '100%',
      }} >
        <View style={{ flex: 0.9 }}>
          <View style={styles.container}>
            <View style={styles.wrapper}>
              {
                isLoading ? (<Text>Creating Resource</Text>) :
                  (<Text> Create New User</Text>)
              }
            </View>
            <View style={styles.input}>
              <TextInput placeholder="Full Name" placeholderTextColor={"red"} value={fullName}
                editable={!isLoading} onChangeText={onChangenameHandler} />
            </View>
            <View style={styles.input}>
              <TextInput placeholder="Email" placeholderTextColor={"red"} value={email}
                editable={!isLoading} onChangeText={onChangeEmailHandler} />
            </View>
            <View style={styles.submitButton}>
              <Button title="submit" onPress={onSubmitHandler} />
            </View>
          </View>
        </View>
        <View style={{ flex: 0.1 }}>
          <FooterButton navigation={navigation} disabled={isLoading} />
        </View>
      </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: 'violet',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    paddingBottom: 10
  },
  input: {
    borderWidth: 2,
    borderColor: "grey",
    textAlignVertical: "center",
    paddingLeft: 10,
    borderRadius: 10,
    color: "green"
  },
  submitButton: {
    backgroundColor: "gray"
  }
});

