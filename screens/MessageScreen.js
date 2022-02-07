import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "./../components/Header";
import useAuth from "./../hooks/useAuth";
import { useRoute } from "@react-navigation/native";
import getMatchedUserInfo from "./../lib/getMatchedUserInfo";
import SenderMessage from "./../components/SenderMessage";
import ReceiverMessage from "./../components/ReceiverMessage";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "./../firebase";

const MessageScreen = () => {
  const { user } = useAuth();
  const { params } = useRoute();
  const { matchDetails } = params;
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    addDoc(collection(db, "matches", matchDetails.id, "messages"), {
      userId: user.uid,
      displayName: user.displayName,
      photoURL: matchDetails.users[user.uid].photoURL,
      message: input,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "matches", matchDetails.id, "messages"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          )
      ),
    [matchDetails, db]
  );
 

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={getMatchedUserInfo(matchDetails?.users, user.uid).displayName}
        callEnabled
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        KeyboardVerticalOffset={10}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlatList
          inverted={-1}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item: message }) =>
              message.userId === user.uid ? (
                <SenderMessage key={message.id} message={message} />
              ) : (
                <ReceiverMessage key={message.id} message={message} />
              )
            }
          />
        </TouchableWithoutFeedback>

        <View style={styles.sendMessageStyle}>
          <TextInput
            style={{ fontSize: 18, padding: 10 }}
            placeholder="Send Message..."
            value={input}
            onChangeText={setInput}
            onSubmitEditing={sendMessage}
          />

          <Button title="Send" color="#FF5864" onPress={sendMessage} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "5%",
    margin: 15,
  },
  sendMessageStyle: {
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-between",
    margin: 10,
    backgroundColor: "#d3d3d3",
  },
});
