import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

const MessageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Message screen</Text>
    </SafeAreaView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "15%",
        margin: 15
    }
});
