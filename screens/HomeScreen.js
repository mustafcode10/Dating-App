import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import useAuth from "./../hooks/useAuth";
import { useTailwind } from "tailwind-rn";

const HomeScreen = ({ navigation }) => {
  const { user, logout } = useAuth();
  const tailwind = useTailwind();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity>
          <Image
            style={{ width: 64, height: 64, borderRadius: 64 / 2 }}
            source={{ uri: user.photoURL }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={{width: 64, height: 64, borderRadius: 64 / 2 }} source={require('./../assets/tinder.png')}/>
        </TouchableOpacity>
           <TouchableOpacity>
        <Image style={{width: 64, height: 64, borderRadius: 64 / 2 }} source={require('./../assets/tinder.png')}/>
        </TouchableOpacity>
      </View>
      {/* End of header */}
      <Text>Home Screen</Text>
      <Button title="Chat Screen" onPress={() => navigation.navigate("Chat")} />
      <Button title="Logout" onPress={logout} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginTop: 40,
  },
});
