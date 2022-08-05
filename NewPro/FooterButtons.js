import * as React from "react"
import { TouchableOpacity, View, Text } from "react-native";
import Icon from "./Icon";
import GetRandomUsers from "./Axios";
export default function FooterButton({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "space-evenly", }} >

      < TouchableOpacity onPress={() => { navigation.navigate('Home'); GetRandomUsers(10); }} style={{
        height: 50, width: 60, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5,
        backgroundColor: 'yellow', borderRadius: 5
      }}><Text>   <Icon name="quill" style={{ alignSelf: 'center', justifyContent: 'center', fontSize: 20 }} />{'\n'}Home</Text>
      </TouchableOpacity>

      < TouchableOpacity onPress={() => navigation.navigate('HR')} style={{
        height: 50, width: 60, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5,
        backgroundColor: 'yellow', borderRadius: 5
      }}>
        <Text>   <Icon name="image" style={{ alignSelf: 'center', justifyContent: 'center', fontSize: 20 }} />{'\n'}   HR</Text>
      </TouchableOpacity>

      < TouchableOpacity onPress={() => navigation.navigate('Account')} style={{
        height: 50, width: 65, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5,
        backgroundColor: 'yellow', borderRadius: 5
      }}>
        <Text>  <Icon name="film" style={{ alignSelf: 'center', justifyContent: 'center', fontSize: 30 }} /> Account </Text>
      </TouchableOpacity>

      < TouchableOpacity onPress={() => navigation.navigate('Admin')} style={{
        height: 50, width: 60, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5,
        backgroundColor: 'yellow', borderRadius: 5
      }}>
        <Text>  <Icon name="newspaper" style={{ alignSelf: 'center', justifyContent: 'center', fontSize: 20 }} />  Admin</Text>
      </TouchableOpacity>

      < TouchableOpacity onPress={() => navigation.navigate('Tech')} style={{
        height: 50, width: 60, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5,
        backgroundColor: 'yellow', borderRadius: 5
      }}>
        <Text> <Icon name="pen" style={{ alignSelf: 'center', justifyContent: 'center', fontSize: 20 }} /> Tech </Text>
      </TouchableOpacity>

    </View>
  )
};