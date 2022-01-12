import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import useAuth from './../hooks/useAuth'

const LoginScreen = () => {
    const {user} =  useAuth()
    console.log('user:', user, signInWithGoogle)
    const {signInWithGoogle} = useAuth()
    return (
        <View>
            <Text>Login screen</Text>
            <Button title="Login" onPress={signInWithGoogle} />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
