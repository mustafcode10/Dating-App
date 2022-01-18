import React from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import useAuth from "./../hooks/useAuth"





const HomeScreen = ({navigation}) => {
    const {user, logout} = useAuth()
    return (
        <SafeAreaView>
            <Text>Home Screen</Text>
            <Button title="Chat Screen" onPress={()=> navigation.navigate('Chat')}/>
              <Button title="Logout" onPress={logout} />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})

