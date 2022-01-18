import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import useAuth from "./../hooks/useAuth";

const LoginScreen = ({ navigation }) => {
  const { user } = useAuth();
  console.log("user:", user, signInWithGoogle);
  const { signInWithGoogle, loading } = useAuth();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text>{loading ? 'Loading...' : 'Login to the app'}</Text>
            <Button title="Login" onPress={signInWithGoogle} /> */}
      <ImageBackground
        style={styles.imageContainer}
        source={{ uri: "https://www.tinder.com/static/tinder.png" }}
      >
        <TouchableOpacity onPress={signInWithGoogle}>
          <View style={styles.buttonStyle}>
            <Text style={styles.signInStyle}>Sign In & get swiping</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: "100%",
  },
  buttonStyle: {
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 650,
    marginHorizontal: 100,
    borderRadius: 15,
    paddingBottom: 20,
  },
  signInStyle: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 15,
    fontWeight: "bold",
    color: 'grey'
  },
});
