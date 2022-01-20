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
    photoURL:
      "https://scontent.famm2-3.fna.fbcdn.net/v/t1.6435-1/s320x320/251500216_4577582788951742_7047083087247365839_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGkf7X2j2-vKuZwq-fSyTdPUTl1NS-80atROXU1L7zRq1qshKi4YqUry0pfKg8rlnQdP7eDVdnt51S9sbLEdkZc&_nc_ohc=hvHpfSrPrIIAX_kD2Nq&_nc_ht=scontent.famm2-3.fna&oh=ae311833ddd85cc826f55b04323a849f&oe=61AD14EF",
  },
  {
    id: 2,
    firstName: "Cinur",
    photoURL:
      "https://scontent.famm2-3.fna.fbcdn.net/v/t31.18172-8/15937157_1606808016012543_2337087566501078422_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF9UKT_6pw0WdYFOjzbFSFznxWHCzeAEJ2fFYcLN4AQnReWBTQTeaGC9Aoe5pjiFZJbQxuKliq4R8-FHQMzX5ep&_nc_ohc=vu3V2pYiL4cAX_15QmA&_nc_ht=scontent.famm2-3.fna&oh=925d3f6c1746191fc163516de6f58683&oe=61B01875",
  },
  {
    id: 7,
    firstName: "Sumi Qurox",
    photoURL:
      "https://scontent.famm2-3.fna.fbcdn.net/v/t1.6435-1/p320x320/101547911_1354523758271738_1676447283203276800_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeEF8Ool3z8QmerFeCziCPP4L0TtgokhKB8vRO2CiSEoH9VZi0tde2Gf1-31XjBuHaEjdCEv6LGnTnywxy9GEVnE&_nc_ohc=Jz0239DgT9gAX8eecgD&tn=fZvDsFi2DvSZ3hrK&_nc_ht=scontent.famm2-3.fna&oh=a46a6b65b1e0c6749b3c9b9965e57671&oe=61B8DF80",
  },
  {
    id: 3,
    firstName: "Ismael_Mohamed",
    photoURL:
      "https://scontent.famm2-3.fna.fbcdn.net/v/t1.6435-9/166765193_4219191584760278_5419838317690091680_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGnrrAyG0tXSaLxoJMpkeB-1O1kY0LZnCrU7WRjQtmcKglaSPUl4q1_hkf0M9296S0M7WMlJNR5yNdTuNeqNWvf&_nc_ohc=sbJzuP-7EdEAX92cYzb&_nc_ht=scontent.famm2-3.fna&oh=19c16b2e9d3d5fc0fbb6505b9e362659&oe=61ABC46B",
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
      <View style={{flex: 1, marginTop: 10,}}>
        <Swiper
        containerStyle={{backgroundColor: 'transparent'}}
          cards={DUMMY_DATA}
          renderCard={(card) => (
            <View key={card.id} style={{backgroundColor: '#FF5864', height: 500, borderRadius: 10}}>
              <Text style={{fontSize: 18, backgroundColor: 'grey'}}>{card.firstName}</Text>
              <Image style={{ height:500}} source={{uri: card.photoURL}} />
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
