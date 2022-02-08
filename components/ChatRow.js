import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import getMatchedUserInfo from "./../lib/getMatchedUserInfo";
import useAuth from "./../hooks/useAuth";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "./../firebase";

const ChatRow = ({ matchDetails }) => {
  //   console.log("matchDetails:", matchDetails);
  const { user } = useAuth();
  const navigation = useNavigation();
  const [matchedUserInfo, setMatchedUserInfo] = useState(null);
  const [lastMessage, setLastMessage] = useState("");
  useEffect(() => {
    setMatchedUserInfo(getMatchedUserInfo(matchDetails.users, user.uid));
  }, [matchDetails, user]);
  //   console.log("matchedUserInfo:", matchedUserInfo);
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "matches", matchDetails.id, "messages"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setLastMessage(snapshot.docs[0]?.data()?.message)
      ),
    [matchDetails, db]
  );
  return (
    <View style={[styles.chatStyle, styles.cardShadow]}>
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={() =>
          navigation.navigate("Message", {
            matchDetails,
          })
        }
      >
        <Image
          style={{ width: 60, height: 60, borderRadius: 60 / 2, margin: 10 }}
          source={{ uri: matchedUserInfo?.photoURL }}
        />
        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            {matchedUserInfo?.displayName}
          </Text>
          <Text>{lastMessage || "Say Hi!!"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ChatRow;

const styles = StyleSheet.create({
  chatStyle: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    margin: 10,
    marginTop: 0,
    borderRadius: 10,
  },
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.22,
    elevation: 2,
  },
});
