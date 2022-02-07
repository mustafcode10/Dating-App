import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./../components/Header";
import ChatList from './../components/ChatList';

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Chat" callEnabled />
      <ChatList />
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "5%",
  },
});
