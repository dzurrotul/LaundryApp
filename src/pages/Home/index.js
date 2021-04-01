import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import ImageHeader from '../../assets/images'
import { Saldo } from '../../components'

const Home = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ImageHeader} style={styles.header}>
                <View  style={styles.hello}>
                </View>
            </ImageBackground>
            <Saldo />
        </View>
    )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    header:{
        width: windowWidth,
        height: windowHeight*0.25,
        paddingHorizontal: 30,
        paddingTop: 10,
    },
    hello:{
        marginTop:windowHeight*0.030
    },
    selamat:{
        fontSize:24
    },
    username:{
        fontSize: 22,
    }
})
