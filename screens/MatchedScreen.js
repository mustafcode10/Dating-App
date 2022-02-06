import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const MatchedScreen = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.matchContainer}>
        <Image
          style={styles.matchedTitle}
          source={require("./../assets/matched.png")}
        />
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 15, color: "white" }}>
            You and she have liked each other.
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
            style={{ width: 80, height: 80, borderRadius: 80 / 2 }}
            source={require("./../assets/sumiQurox.jpg")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 80, height: 80, borderRadius: 80 / 2 }}
            source={require("./../assets/sumiQurox.jpg")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.sendMessageButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          {/* <Image
            style={{ width: 80, height: 80, borderRadius: 80 / 2 }}
            source={require("./../assets/sumiQurox.jpg")}
          /> */}
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
  }
});
