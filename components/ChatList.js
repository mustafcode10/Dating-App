import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { onSnapshot, collection, query, where } from "firebase/firestore";
import { db } from "./../firebase";
import useAuth from "./../hooks/useAuth";
import ChatRow from "./../components/ChatRow";

const ChatList = () => {
  const { user } = useAuth();
  const [matches, setMatches] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "matches"),
          where("userMatched", "array-contains", user.uid)
        ),
        (snapshot) => {
          setMatches(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        }
      ),
    [user]
  );
  console.log("matches:", matches);
  return  matches.length > 0 ? (
    <FlatList
      data={matches}
      KeyExtractor={(item) => item.id}
      renderItem={({ item }) => <ChatRow matchDetails={item} />}
    />
  ) : (
      <View>
       <Text>No matches</Text>
      </View>
   
  );


};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: -10,
    backgroundColor: "#fff",
  },
});
