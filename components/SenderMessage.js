import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SenderMessage = ({ message }) => {
  return (
    <View style={styles.senderStyle}>
      <Text style={styles.senderMessageStyle}>{message.message}</Text>
    </View>
  );
};

export default SenderMessage;

const styles = StyleSheet.create({
  senderStyle: {
    backgroundColor: "#1e90ff",
    alignSelf: "flex-end",
    margin: 2,
    marginLeft: "auto",
    borderRadius: 5,
  },
  senderMessageStyle: {
    margin: 5,
    fontSize: 18,
    color: "white",
  },
});
