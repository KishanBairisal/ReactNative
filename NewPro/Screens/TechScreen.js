import React, { useRef, useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { ReactNativeModal } from "react-native-modal";
import { Alert, ImageBackground, View, Image, Dimensions, StyleSheet, ScrollView, Text, Pressable } from "react-native";
import FooterButton from "../FooterButtons";
import Icon from "../Icon";
import A from '../assets/ProjectImages/a.jpg';
import B from '../assets/ProjectImages/b.jpg';
import C from '../assets/ProjectImages/c.jpg';
import D from '../assets/ProjectImages/D.jpg';
import E from '../assets/ProjectImages/E.jpg';
import F from '../assets/ProjectImages/F.jpg';
import G from '../assets/ProjectImages/G.jpg';
import H from '../assets/ProjectImages/H.jpg';
import I from '../assets/ProjectImages/I.jpg';
import J from '../assets/ProjectImages/J.jpg';
import K from '../assets/ProjectImages/K.jpg';
import L from '../assets/ProjectImages/L.jpg';
import M from '../assets/ProjectImages/M.jpg';
import N from '../assets/ProjectImages/N.jpg';
import O from '../assets/ProjectImages/O.jpg';
import P from '../assets/ProjectImages/P.jpg';
import Q from '../assets/ProjectImages/Q.jpg';
import R from '../assets/ProjectImages/R.jpg';
import { iconList } from "react-native-icomoon";

// const baseUrl = "https://reqres.in";

export default function TechScreen({ navigation }) {
  const [imageVisible, setImageVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [imagesList, setImagesList] = useState([]);
  // const [source1, setSource1] = useState(false);

  const [iName, setIname] = useState('');
  const [profile, setProfile] = useState(null);
  const source = { uri: profile };
  // const s1 = { uri: source1 };
  // const source2 = { uri: "https://source.unsplash.com/random" };
  // const source3 = { uri: "https://source.unsplash.com/random" };
  const iList = [];

  const { width, height } = Dimensions.get("screen");
  // const il = imagesList;
  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      if (i === 0) {
        iList.push("https://source.unsplash.com/random/photos/");
      }
      else if (i === 1) {
        iList.push("https://source.unsplash.com/random/random/");
      }
      else {
        iList.push("https://source.unsplash.com/random/");
      }
    }
    setImagesList(iList);
  }, []);

  useEffect(() => {
    setLoading(true);
    try {
      axios.get("https://api.randomuser.me/")
        .then((response) => {
          setProfile(response?.data?.results[0]?.picture?.large);
          setData(response?.data?.results[0]);
          setIname(response?.data?.results[0]?.name);
          // setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          // setLoading(false);
        })
    }
    catch (err) {
      console.log("error: ", err)
    }

  }, [])

  return (
    <View style={{ flex: 1, width, height }}>
      <View style={{
        backgroundColor: 'rgb(250,220,230)',
        flex: 0.9
      }}>
        <ScrollView>
          <View style={styles.Border}>
            <View style={styles.circle1} >
              <Image source={source} style={styles.circle} />
            </View>
            <Text style={{ fontFamily: "DancingScript-Bold" }}>125 {'\n'}Post</Text>
            <Text style={{ fontFamily: "DancingScript-Bold" }}>12.5k {'\n'}Followers</Text>
            <Text style={{ fontFamily: "DancingScript-Bold" }}>897 {'\n'}Folowing</Text>
          </View>
          <View>

          </View>
          <View style={{ width: width - 10, height: height - 700 }}>
            <Text style={{ paddingLeft: 17, fontFamily: "poppins italic" }}>
              {iName && (iName?.title + ' ' + iName?.first + ' ' + iName?.last + '(' + data.gender + ') \n' + data.email + '\n C.No: ' + data.phone)}
            </Text>
            <Text style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10, justifyContent: 'center', textAlign: 'justify', paddingBottom: 10 }}>  {
              iName && ('My Name is ' + iName.first + ' ' + iName.last + '. I am ' + data.dob.age + ' years old. I am from ' + data.location.country +
                '. My instagram username is ' + data.login.username + ' and Password is ' + data.login.password)}.
            </Text></View>
          <View style={styles.Border} >
            <Text><View style={styles.circle2} />{'\n'} Camera</Text>
            <Text><View style={styles.circle2} />{'\n'} Contents</Text>
            <Text><View style={styles.circle2} />{'\n'}  Songs</Text>
            <Text><View style={styles.circle2} />{'\n'}   Audio</Text>
            <Text><View style={styles.circle2} />{'\n'}  Video</Text>
          </View>
          <View style={styles.Border}>
            <View style={{ paddingLeft: 20 }} >
              <ReactNativeModal isVisible={imageVisible} onRequestClose={() => {
                Alert.alert("Modal has been Closed.");
                setImageVisible(!imageVisible);
              }}>
                <View style={styles.centredView}>
                  <View style={[styles.modalView,
                  { height: 200, width: 300, backgroundColor: 'pink', textAlign: 'center', alignItems: 'center' }]}>
                    <Text style={{ fontSize: 20 }}>
                      Images are ther.
                    </Text>
                    <Pressable style={[styles.button, { backgroundColor: 'gray' }]}
                      onPress={() => setImageVisible(!imageVisible)}>
                      <Text style={{ fontSize: 20 }}> hide Images</Text>
                    </Pressable>
                  </View>
                </View>
              </ReactNativeModal>
              <Pressable style={styles.button} onPress={() => setImageVisible(true)}>
                <Text style={{ fontSize: 30 }}>
                  <Icon name="image" style={{ alignSelf: 'center', justifyContent: 'space-evenly', fontSize: 20 }} />
                </Text>
              </Pressable>
            </View>

            <View style={{ paddingLeft: 90 }}>
              <ReactNativeModal isVisible={modalVisible} onRequestClose={() => {
                Alert.alert("Modal has been Closed.");
                setModalVisible(!modalVisible);
              }}>
                <View style={styles.centredView}>
                  <View style={[styles.modalView, { height: 200, width: 300, backgroundColor: 'pink', textAlign: 'center', alignItems: 'center' }]}>
                    <Text style={{ fontSize: 20 }}>
                      Reels are there...
                    </Text>
                    <Pressable style={[styles.button, { backgroundColor: 'gray' }]} onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={{ fontSize: 20 }}> hide Modal</Text>
                    </Pressable>
                  </View>
                </View>
              </ReactNativeModal>
              <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>
                  <Icon name="pen" style={{ fontSize: 20 }} />
                </Text>
              </Pressable>
            </View>

            <View style={{ paddingLeft: 80 }}>
              <ReactNativeModal isVisible={videoVisible} onRequestClose={() => {
                Alert.alert("Modal has been Closed.");
                setVideoVisible(!videoVisible);
              }}>
                <View style={styles.centredView}>
                  <View style={[styles.modalView, { height: 200, width: 300, backgroundColor: 'pink', textAlign: 'center', alignItems: 'center', }]}>
                    <Text style={{ fontSize: 20 }} >
                      Videos are there.
                    </Text>
                    <Pressable style={[styles.button, { backgroundColor: 'gray' }]} onPress={() => setVideoVisible(!videoVisible)}>
                      <Text style={{ fontSize: 20 }}> hide Videos</Text>
                    </Pressable>
                  </View>
                </View>
              </ReactNativeModal>
              <Pressable style={styles.button} onPress={() => setVideoVisible(true)}>
                <Text style={{ fontSize: 20 }}>
                  <Icon name="film" style={{ alignSelf: 'center', fontSize: 20 }} />
                </Text>
              </Pressable>
            </View>
            <View>
            </View>
          </View>

          <View style={styles.Border} >
            {/* {imagesList?.map((imageURi) => {
              return <Image source={imageURi} resizeMode="cover" style={styles.box} />
            })
            } */}
          </View>
          <View style={styles.Border} >
            {imagesList.map((value) => {
              return <Image source={{ uri: value, cache: 'reload' }} resizeMode="cover" style={styles.box} />
            })}
            {/* <Image source={{ uri: "https://source.unsplash.com/random/random/", cache: 'reload' }} resizeMode="cover" style={styles.box} />
            <Image source={{ uri: "https://source.unsplash.com/random/profile/", cache: 'reload' }} resizeMode="cover" style={styles.box} /> */}
          </View>
          <View style={styles.Border} >
            <Image source={{ uri: "https://source.unsplash.com/person/", cache: 'reload' }} resizeMode="cover" style={styles.box} />
            <Image source={{ uri: "https://source.unsplash.com/random/person/", cache: 'reload' }} resizeMode="cover" style={styles.box} />
            <Image source={{ uri: "https://source.unsplash.com/random/user/", cache: 'reload' }} resizeMode="cover" style={styles.box} />
          </View>




          <View style={styles.Border} >
            <ImageBackground source={source} resizeMode="cover" style={styles.box} ><Text style={{ paddingLeft: 90 }}>
              <Icon name="film" style={{ paddingLeft: 50, justifyContent: 'center', fontSize: 30 }} />
            </Text>
            </ImageBackground>
            <ImageBackground source={C} resizeMode="cover" style={styles.box} ><Text style={{ paddingLeft: 90 }}>
              <Icon name="film" style={{ paddingLeft: 50, justifyContent: 'center', fontSize: 30 }} />
            </Text>
            </ImageBackground>
            <ImageBackground source={D} resizeMode="cover" style={styles.box} ><Text style={{ paddingLeft: 90 }}>
              <Icon name="film" style={{ paddingLeft: 50, justifyContent: 'center', fontSize: 30 }} />
            </Text>
            </ImageBackground>

          </View>

          <View style={styles.Border} >
            <Image source={H} resizeMode="cover" style={styles.box} />
            <Image source={I} resizeMode="cover" style={styles.box} />
            <Image source={J} resizeMode="cover" style={styles.box} />
          </View>
          <View style={styles.Border} >
            <Image source={K} resizeMode="cover" style={styles.box} />
            <Image source={L} resizeMode="cover" style={styles.box} />
            <Image source={M} resizeMode="cover" style={styles.box} />
          </View>
          <View style={styles.Border} >
            <Image source={N} resizeMode="cover" style={styles.box} />
            <Image source={O} resizeMode="cover" style={styles.box} />
            <Image source={P} resizeMode="cover" style={styles.box} />
          </View>
        </ScrollView>
      </View >
      <View style={{ flex: 0.1 }}>
        <FooterButton navigation={navigation} />
      </View>
    </View >
  )
};

const styles = StyleSheet.create({
  circle: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  circle1: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#fe4164'
  },
  circle2: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: 'grey',
  },
  box: {
    backgroundColor: "grey",
    width: 125,
    height: 125,
    borderRadius: 5,
  },
  Border: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-evenly",
    textAlign: 'center',
    paddingBottom: 5
  },
  centredView: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  modalView: {
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    button: {
      borderRadius: 20,
      padding: 10,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 100
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    }
  }
});


