import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const MatchedScreen = ({navigation}) => {

  return (
    <View >
      <Text>Matched Screen</Text>
      <Image
        style={styles.imageBackground} 
       source={{ uri: 'https://www.tinder.com/static/tinder.png' }}
       />
    </View>
  );
};

export default MatchedScreen;

const styles = StyleSheet.create({
//      container: {
//     flex: 1,
//   },
     imageContainer: {
    width: "100%",
    height: "100%",
  },
});
