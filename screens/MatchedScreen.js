import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from '@react-navigation/native';

const MatchedScreen = ({navigation}) => {
  console.log("navigation:", navigation);
  const {params} = useRoute();
  console.log("params:", params);
  const { loggedInProfile, userSwiped } = params;
  console.log("userSwiped:", userSwiped);
  console.log("loggedInProfile:", loggedInProfile);

  return (
    <View style={styles.container}>
      <View style={styles.matchContainer}>
        <Image
          style={styles.matchedTitle}
          source={require("./../assets/matched.png")}
        />
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 15, color: "white" }}>
            You and {userSwiped.displayName} have liked each other.
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: -40,
          // backgroundColor: "white",
          margin: 80,
        }}
      >
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
            source={{ uri: loggedInProfile.photoURL }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
            source={{ uri: userSwiped.photoURL }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.sendMessageButton}>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Text style={styles.sendMessageText}>Send a Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MatchedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fa8072",
  },
  matchContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  matchedTitle: {
    width: "70%",
    height: "35%",
  },
  sendMessageButton: {
    backgroundColor: "white",
    width: "70%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    alignSelf: "center",
    borderRadius: 20,
  },
  sendMessageText: {
    fontSize: 18,
    // color: "white",
    fontWeight: "bold",
  },
});
