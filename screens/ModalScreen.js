import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import useAuth from "./../hooks/useAuth";
import { db } from "./../firebase";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";

const ModalScreen = ({ navigation }) => {
  const { user } = useAuth();
  // console.log("user:", user);
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);
  const incompleteForm = !image || !job || !age;

  const updateUserProfile = () => {
    setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      displayName: user.displayName,
      photoURL: image,
      job: job,
      age: age,
      timestamp: serverTimestamp(),
    }).then(() => {
        navigation.navigate("Home");
    }).catch((error) => {
        alert(error.message);
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Update your profile",
      headerShown: true,
      headerStyle: {
        backgroundColor: "#FF5864",
      },
      headerTitleStyle: {
        color: "#fff",
      },
    });
  }, []);

  return (
    <SafeAreaView style={{ marginTop: 100 }}>
      <View style={{ alignItems: "center" }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Image
            style={{ width: 80, height: 70, resizeMode: "contain" }}
            source={{
              uri: "https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png",
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.displayNameStyle}>
            Welcome {user.displayName}
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.profilePicture}>Step 1: Profile pic</Text>
          <TextInput
            value={image}
            onChangeText={setImage}
            placeholder="Enter your profile pic url"
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.profilePicture}>Step 2: The job</Text>
          <TextInput
            value={job}
            onChangeText={setJob}
            placeholder="Enter your occupation"
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.profilePicture}>Step 3: The Age</Text>
          <TextInput
            value={age}
            onChangeText={setAge}
            placeholder="Enter your age"
            keyboardType="numeric"
            maxLength={2}
          />
          <TouchableOpacity
            disabled={incompleteForm}
            style={[
              styles.updateProfile,
              incompleteForm && { backgroundColor: "grey" },
            ]}
            onPress={updateUserProfile}
          >
            <Text style={styles.textProfile}>Update Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  displayNameStyle: {
    fontSize: 20,
    color: "grey",
    fontWeight: "bold",
  },
  profilePicture: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
  },
  updateProfile: {
    marginTop: 30,
    width: 180,
    height: 50,
    backgroundColor: "#f08080",
    borderRadius: 10,
    justifyContent: "center",
  },
  textProfile: {
    margin: 2,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
