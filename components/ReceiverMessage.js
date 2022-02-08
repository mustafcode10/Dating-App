import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ReceiverMessage = ({ message }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 60, height: 60, borderRadius: 60 / 2,  }}
        source={{ uri: message.photoURL }}
      />
      <View style={styles.receierStyle}>
        <Text style={styles.receiverMessageStyle}>{message.message}</Text>
      </View>
    </View>
  );
};

export default ReceiverMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 5,
  },
  receierStyle: {
    backgroundColor: "#f08080",
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
    alignSelf: "center",
  },
  receiverMessageStyle: {
    margin: 5,
    fontSize: 18,
    color: "white",
  },
});
