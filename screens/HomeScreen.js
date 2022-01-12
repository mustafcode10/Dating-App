import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'




const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Chat Screen" onPress={()=> navigation.navigate('Chat')}/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})

