import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import getMatchedUserInfo from "./../lib/getMatchedUserInfo";
import useAuth from "./../hooks/useAuth";

const ChatRow = ({ matchDetails }) => {
  //   console.log("matchDetails:", matchDetails);
  const { user } = useAuth();
  const navigation = useNavigation();
  console.log("navigation:", navigation);
  const [matchedUserInfo, setMatchedUserInfo] = useState(null);
  useEffect(() => {
    setMatchedUserInfo(getMatchedUserInfo(matchDetails.users, user.uid));
  }, [matchDetails, user]);
//   console.log("matchedUserInfo:", matchedUserInfo);
  return (
      <View style={[styles.chatStyle, styles.cardShadow]}>
          <TouchableOpacity style={{ flexDirection: "row"}} onPress={() => navigation.navigate("Message")}>
      <Image
           style={{ width: 60, height: 60, borderRadius: 60/ 2, margin: 10 }}
            source={{ uri: matchedUserInfo?.photoURL }}
       />
       <View style={{ justifyContent: "center"}} >
       <Text style={{fontWeight: "bold"}} > {matchedUserInfo?.displayName}</Text>
       <Text> Say Hi!!</Text>
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
    }

});
