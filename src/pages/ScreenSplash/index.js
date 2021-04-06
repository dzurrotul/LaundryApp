import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SplashBg } from '../../assets/'

const ScreenSplash = ({ navigation }) => {
   
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('MainApp');
        }, 3000)
    }, [navigation]);
    return (
       <ImageBackground source={SplashBg} style={styles.background}>
           <Image source={Logo} style={styles.logo} />
       </ImageBackground>
    )
}

export default ScreenSplash;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 222,
        height: 105,
    }
})
