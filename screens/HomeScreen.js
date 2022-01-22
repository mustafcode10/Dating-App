import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import useAuth from "./../hooks/useAuth";
import { useTailwind } from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

const DUMMY_DATA = [
  {
    id: 1,
    firstName: "Mustaf",
    lastName: "Dirie",
    photoURL:
      "https://instagram.famm2-3.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/250927798_470183747745566_2681257997982768721_n.jpg?_nc_ht=instagram.famm2-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Xio8GVfcza0AX9PSBEZ&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=MjY5NzIwNjQ2MTE3MzQwMjI5NA%3D%3D.2-ccb7-4&oh=00_AT_vupzi4OwztHLgmS_8Ri9liz00UpqDO78NBm9ierRWZQ&oe=61F20D42&_nc_sid=30a2ef",
    age: 26,
    job: "Software Developer",
  },
  {
    id: 2,
    firstName: "Meryem ",
    lastName: "Uzerli",
    photoURL:
      "https://cdn.technosports.co.in/wp-content/uploads/2021/11/Meryem.jpg",
    age: 38 ,
    job: "Actress and Model",
  },
  {
    id: 3,
    firstName: "Duckie",
    lastName: "Thot",
    photoURL:
      "https://cdn.technosports.co.in/wp-content/uploads/2021/11/Duckie-Thot-1064x1536.jpg",
    age:  26,
    job: "Model",
  },
  {
    id: 4,
    firstName: "Ismael",
    lastName: "Mohamed",
    photoURL:
      "https://scontent.famm2-3.fna.fbcdn.net/v/t1.6435-9/166765193_4219191584760278_5419838317690091680_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGnrrAyG0tXSaLxoJMpkeB-1O1kY0LZnCrU7WRjQtmcKglaSPUl4q1_hkf0M9296S0M7WMlJNR5yNdTuNeqNWvf&_nc_ohc=sbJzuP-7EdEAX92cYzb&_nc_ht=scontent.famm2-3.fna&oh=19c16b2e9d3d5fc0fbb6505b9e362659&oe=61ABC46B",
    age: 26,
    job: "self-employed",
  },
];

const HomeScreen = ({ navigation }) => {
  const { user, logout } = useAuth();
  const tailwind = useTailwind();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={logout}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
            source={{ uri: user.photoURL }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
            source={require("./../assets/tinder.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Ionicons name="chatbubbles-sharp" size={42} color="#FF5864" />
        </TouchableOpacity>
      </View>
      {/* End of header */}
      {/* Cards */}
      <View style={{ flex: 1, marginTop: 10 }}>
        <Swiper
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DUMMY_DATA}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  color: "#4DED30",
                },
              },
            },
          }}
          renderCard={(card) => (
            <View
              key={card.id}
              style={{
                position: "relative",
                backgroundColor: "white",
                height: 500,
                borderRadius: 10,
              }}
            >
              {/* <Text style={{fontSize: 18, backgroundColor: 'grey'}}>{card.firstName}</Text> */}
              <Image
                style={{ height: 500, borderRadius: 10 }}
                source={{ uri: card.photoURL }}
              />
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  height: 70,
                  marginTop: 10,
                  position: "absolute",
                  width: 371.5,
                  bottom: 0,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: 15,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,
                    elevation: 2,
                  }}
                >
                  <View>
                    <Text style={{ fontWeight: "bold" }}>
                      {card.firstName} {card.lastName}
                    </Text>
                    <Text>{card.job}</Text>
                  </View>
                  <Text style={{ fontWeight: "bold" }}>{card.age}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>

      {/* <Text>Home Screen</Text>
      <Button title="Chat Screen" onPress={() => navigation.navigate("Chat")} />
      <Button title="Logout" onPress={logout} /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginTop: 45,
  },
});
