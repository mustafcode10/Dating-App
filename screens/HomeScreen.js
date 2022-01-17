import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import useAuth from "./../hooks/useAuth"




const HomeScreen = ({navigation}) => {
    const {logout} = useAuth()
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Chat Screen" onPress={()=> navigation.navigate('Chat')}/>
              <Button title="Logout" onPress={logout} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})

