import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, callEnabled }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerStyleChat}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity>
          <Ionicons
            name="chevron-back-outline"
            size={34}
            color="#FF5864"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
      </View>
      {callEnabled && (
        <TouchableOpacity style={styles.telephoneStyleChat}>
          <Foundation name="telephone" size={30} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerStyleChat: {
    flexDirection: "row",
    margin: "5%",
    justifyContent: "space-between",
  },
  telephoneStyleChat: {
    backgroundColor: "#ffe4e1",
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
