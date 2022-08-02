import React, { useRef } from "react";
import { useState } from "react";
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

const baseUrl = "https://reqres.in";

export default function TechScreen({ navigation }) {
  const [imageVisible, setImageVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);





  const { width, height } = Dimensions.get("screen");

  return (
    <View style={{ flex: 1, width, height }}>
      <ImageBackground source={R} resizeMode="cover" style={{
        flex: 0.9
      }}>
        <ScrollView>
          <View style={styles.Border}>

            <View style={styles.circle1} >
              <Image source={A} style={styles.circle} />
            </View>
            <Text style={{ fontFamily: "DancingScript-Bold" }}>125 {'\n'}Post</Text>
            <Text style={{ fontFamily: "DancingScript-Bold" }}>12.5k {'\n'}Followers</Text>
            <Text style={{ fontFamily: "DancingScript-Bold" }}>897 {'\n'}Folowing</Text>
          </View>
          <View>

          </View>
          <Text style={{ paddingLeft: 20, fontFamily: "poppins italic" }}>
            Kishan Bairisal
          </Text>
          <Text style={{ paddingLeft: 10 }}>I help working moms decorate their homes.
            I help stressed pet-owners care for their pets.
            I help ambitious college students get financial aid.</Text>
          <View style={styles.Border} >
            <Text><View style={styles.circle2} />{'\n'} Camera</Text>
            <Text><View style={styles.circle2} />{'\n'} Contents</Text>
            <Text><View style={styles.circle2} />{'\n'}  Songs</Text>
            <Text><View style={styles.circle2} />{'\n'}   Audio</Text>
            <Text><View style={styles.circle2} />{'\n'}  Video</Text>
          </View>
          <View style={styles.Border}>
            <View style={styles.centredView}>
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
              <Pressable style={[styles.button, { backgroundColor: 'red' }]} onPress={() => setImageVisible(true)}>
                <Text style={{ fontSize: 20 }}>
                  <Icon name="image" style={{ alignSelf: 'center', justifyContent: 'center', fontSize: 20 }} />
                </Text>
              </Pressable>
            </View>

            <View style={styles.centredView}>
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
              <Pressable style={[styles.button, { backgroundColor: 'red' }]} onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>
                  <Icon name="pen" style={{ alignSelf: 'center', justifyContent: 'center', fontSize: 20 }} />
                </Text>
              </Pressable>
            </View>

            <View style={styles.centredView}>
              <ReactNativeModal isVisible={videoVisible} onRequestClose={() => {
                Alert.alert("Modal has been Closed.");
                setVideoVisible(!videoVisible);
              }}>
                <View style={styles.centredView}>
                  <View style={[styles.modalView, { height: 200, width: 300, backgroundColor: 'pink', textAlign: 'center', alignItems: 'center', }]}>
                    <Text style={{ fontSize: 20 }} >
                      Videos are there.
                    </Text>
                    <Pressable style={[styles.button, { backgroundColor: 'blue' }]} onPress={() => setVideoVisible(!videoVisible)}>
                      <Text style={{ fontSize: 20 }}> hide Videos</Text>
                    </Pressable>
                  </View>
                </View>
              </ReactNativeModal>
              <Pressable style={[styles.button, { backgroundColor: 'red' }]} onPress={() => setVideoVisible(true)}>
                <Text style={{ fontSize: 20 }}>
                  <Icon name="film" style={{ alignSelf: 'center', justifyContent: 'center', fontSize: 20 }} />
                </Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.Border} >
            <ImageBackground source={B} resizeMode="cover" style={styles.box} ><Text style={{ paddingLeft: 90 }}>
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
            <ImageBackground source={E} resizeMode="cover" style={styles.box} />
            <ImageBackground source={F} resizeMode="cover" style={styles.box} />
            <ImageBackground source={G} resizeMode="cover" style={styles.box} />
          </View>
          <View style={styles.Border} >
            <ImageBackground source={H} resizeMode="cover" style={styles.box} />
            <ImageBackground source={I} resizeMode="cover" style={styles.box} />
            <ImageBackground source={J} resizeMode="cover" style={styles.box} />
          </View>
          <View style={styles.Border} >
            <ImageBackground source={K} resizeMode="cover" style={styles.box} />
            <ImageBackground source={L} resizeMode="cover" style={styles.box} />
            <ImageBackground source={M} resizeMode="cover" style={styles.box} />
          </View>
          <View style={styles.Border} >
            <ImageBackground source={N} resizeMode="cover" style={styles.box} />
            <ImageBackground source={O} resizeMode="cover" style={styles.box} />
            <ImageBackground source={P} resizeMode="cover" style={styles.box} />
          </View>
        </ScrollView>
      </ImageBackground >
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
    alignItems: 'center', justifyContent: "space-evenly",
    paddingBottom: 5
  },
  centredView: {
    justifyContent: 'center',
    alignItems: 'center',
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


